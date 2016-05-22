import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

import {Fattura} from 'fatture/Fattura';
import {FatturaService} from 'fatture/FatturaService';

@autoinject
export class paymentInvoice {

    fatture: Fattura[] = [];
    @bindable fatturaCorrente: number;

    constructor(private fattureService: FatturaService) {
        this.fattureService.ultimoAnno()
            .then(response => {
                this.fatture = <Fattura[]>response.content;
            });
    }
}