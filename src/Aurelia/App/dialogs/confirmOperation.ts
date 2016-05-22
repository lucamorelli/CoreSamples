import {DialogController} from 'aurelia-dialog';

export class confirmOperation {
    static inject = [DialogController];
    private controller;

    public message: string;

    constructor(controller) {
        this.controller = controller;
    }

    activate(message) {
        this.message = message;
    }
}
