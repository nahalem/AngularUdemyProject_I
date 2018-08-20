export class Message{
    type: number;
    code: string;
    message: string;

    constructor(type, code, message){
        this.type = type;
        this.code = code;
        this.message = message;
    }
}
export const MSG_TYPES_ICONS = ['fa fa-frown-o','fa fa-exclamation-triangle','fa fa-info-circle'];
export const MSG_TYPES_TITLES = ['Error:','Warning:','Info:'];
export const ERROR = 0;
export const WARNING = 1;
export const INFO = 2;
