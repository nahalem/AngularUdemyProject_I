import { Injectable } from '@angular/core';
import { InterceptorService } from 'ng2-interceptors';
import { Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MessagesService } from './messages.service';
import { ERROR, INFO, Message, WARNING } from './message';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { WebApiMainUrl } from "./../appconfig";

declare var ej: any;

@Injectable()
export class CRUDService {
    protected headers = null;
    protected options = null;
    protected stop$: Subject<boolean>;
    private subscriptions: Subscription;
    public apiUrl: string = WebApiMainUrl;

    constructor(protected http: InterceptorService, protected msgService: MessagesService = new MessagesService()) {
        console.log('Service Users Constructor start');
        this.stop$ = new Subject();
        this.subscriptions = new Subscription();
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    setApiUrl(apiUrl: string): void {
        this.apiUrl = apiUrl;
        this.options = new RequestOptions({ headers: this.headers });
    }

    getFilteredList(filter: any): Observable<any> {
        this.options = new RequestOptions({ headers: this.headers });
        let resp = this.http.post(this.apiUrl, filter, this.options)
            .catch(this.handleError)
            .takeUntil(this.stop$)
            .map(this.extractData);
        //this.subscriptions.add(resp.subscribe());
        return resp;
    }

    getList(apiUrl: string = this.apiUrl): Observable<any[]> {
        console.log('getList started ...');
        // var url = apiUrl || this.apiUrl;
        let resp = this.http.get(apiUrl)
            .catch(this.handleError)
            .takeUntil(this.stop$)
            .map(this.extractData);
        //this.subscriptions.add(resp.subscribe());
        if (resp === null) {
            return Observable.of([]);
        } else {
            return resp;
        }
    }

    getOne(id: string): Observable<any> {
        console.log('getOne start: ' + this.apiUrl + '/' + id);
        return this.http.get(this.apiUrl + '/' + id)
            .catch(this.handleError)
            .takeUntil(this.stop$)
            .map(this.extractData);
    }

    getManyById(id: string, by?: string): Observable<any[]> {
        console.log('getOne start: ' + this.apiUrl + '/' + id);
        by = by || '';
        let _url = this.apiUrl + (by ? '/' + by : '');
        return this.http.get(_url + '/' + id)
            .catch(this.handleError)
            .takeUntil(this.stop$)
            .map(this.extractData);
    }

    save(obj: any): Observable<any> {
        this.options = new RequestOptions({ headers: this.headers });
        //console.log('Saving ...started');
        if (obj.id) {
            console.log('PUT ...started apiUrl:' + this.apiUrl);
            //console.log(JSON.stringify(obj));
            return this.http.put(this.apiUrl, obj, this.options)
                .map(this.extractData)
                .catch(this.handleError);
        } else {
            console.log('POST ...started apiUrl:' + this.apiUrl);
            return this.http.post(this.apiUrl, obj, this.options)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    saveMany(obj: Array<any>): Observable<any[]> {
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.apiUrl, obj, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateMany(obj: Array<any>): Observable<any[]> {
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.apiUrl, obj, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(uid: string): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + uid, )
            .map(this.extractData)
            .catch(this.handleError);
    }

    searchByFilter(filterRequest: any, by?: string): Observable<any> {
        this.options = new RequestOptions({ headers: this.headers });
        if (filterRequest) {
            by = by || '';
            let _url = this.apiUrl + (by ? '/' + by : '');
            return this.http.post(_url, filterRequest, this.options)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    protected extractData(res: Response) {
        let body = null;
        try {
            body = res.json();
        } catch (error) {
            this.msgService.add({ code: "CRUD001", message: "Something went wrong with JSON response.", type: ERROR });
            console.warn("Something went wrong with JSON response.");
            console.warn(error);
        }

        return body;
    }

    protected handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: any = {};
        if (error instanceof Response) {
            errMsg = error.json() || {}
        } else {
            errMsg = error.message ? { "error": error.message } : { "error": error.toString() };
        }
        console.error('http handleError:');
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    newStopper() {
        this.stop$ = new Subject();
    }

    stop() {
        this.stop$.next(true);
        // this.subscriptions.unsubscribe();
    }
    getStop() {
        return this.stop$;
    }
}
