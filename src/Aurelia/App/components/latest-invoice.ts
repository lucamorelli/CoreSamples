import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {bindingMode} from 'aurelia-framework';

import {FatturaService} from 'fatture/FatturaService';
import {FatturaVm} from 'fatture/FatturaVm';

@autoinject
export class latestInvoice {

    fatture: FatturaVm[] = [];
    @bindable recordNumber;

    constructor(private fatturaService: FatturaService) {
    }

    bind() {
        console.log(this.recordNumber);
        this.fatturaService.fattureRecenti(this.recordNumber)
            .then(response => {
                this.fatture = <FatturaVm[]>response.content;
            });

    }
}