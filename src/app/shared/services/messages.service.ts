import { Injectable } from '@angular/core';
import { Message, ERROR, INFO, WARNING } from "./message";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {
    messages: Message[];
    amount: number;
    msgsVisible: boolean;
    message$: Subject<Message>;

    constructor() {
        this.messages = [];
        this.msgsVisible = false;
        this.amount = 0;
        this.message$ = new Subject();
    }

    add(msg: Message) {
        this.message$.next(msg);
        this.amount += 1;
        this.msgsVisible = true;
    }

    delete(msgIdx) {
        this.messages.splice(msgIdx, 1);
        this.amount -= 1;
        if (this.amount === 0) {
            this.hide();
        }
    }

    registerSubject(sub: Subject<Message>) {
        this.message$ = sub;
    }

    show() {
        this.msgsVisible = true;
    }

    hide() {
        this.msgsVisible = false;
    }

    toggle() {
        console.log('MessagesService toggle():');
        console.log(this.msgsVisible);

        this.msgsVisible = (this.msgsVisible ? false : true);
    }
}
