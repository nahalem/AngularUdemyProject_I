import { Injectable } from '@angular/core';
import { CRUDService } from './crud.service';
import { InterceptorService } from "ng2-interceptors";
import { DictionaryItem } from './../models/dictionary-item';
import * as _ from 'lodash';

@Injectable()
export class DictionaryService extends CRUDService {
    readonly apiUrl = 'api/frameworkdictionary/getuserdictionary';
    dictionary = new Array<DictionaryItem>();

    constructor(protected http: InterceptorService) {
        super(http);
        super.setApiUrl(this.apiUrl);
    }

    reloadDictionary() {
        return super.getList().subscribe((data) => {
            this.dictionary = data;
            console.log('Dictionary loaded');
        });
    }

    getTranslation(key: string): string {
        const item = _.find(this.dictionary,
            (d) => {
                return d.key === key;
            });
        return (item) ? item.translation : key;
    }

    getTranslationDicionary(items: DictionaryItem[]){
        this.dictionary = items;
    }
}
