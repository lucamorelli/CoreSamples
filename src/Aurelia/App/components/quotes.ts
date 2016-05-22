import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

import {Preventivo} from '../preventivi/Preventivo';
import {PreventivoService} from '../preventivi/PreventivoService';

@autoinject
export class quotes {


    preventivi: Preventivo[] = [];

    @bindable preventivoCorrente: Preventivo;

    constructor(private preventivoService: PreventivoService) {
        this.preventivoService.ultimoAnno()
            .then(response => {
                this.preventivi = <Preventivo[]>response.content;
            });

    }


}