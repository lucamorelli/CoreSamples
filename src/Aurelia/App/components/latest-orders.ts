import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {bindingMode} from 'aurelia-framework';

import {CommesseService} from 'commesse/CommesseService';
import {Commessa} from 'commesse/Commessa';

@autoinject
export class latestOrders {

    commesse: Commessa[] = [];
    @bindable recordNumber;

    constructor(private commessaService: CommesseService) {
    }

    bind() {
        console.log(this.recordNumber);
        this.commessaService.ultime(this.recordNumber)
            .then(response => {
                this.commesse = <Commessa[]>response.content;
            });

    }
}