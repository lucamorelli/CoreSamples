import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

import {Tecnologia} from 'tabelle/Tecnologia';
import {TabelleService} from 'tabelle/TabelleService';

import {logMethod} from '../Helpers/Decorators';
import {logProperty} from '../Helpers/Decorators';
import {logClass} from '../Helpers/Decorators';

//@logClass
@autoinject
export class technologyType {


    //    @logProperty
    tecnologie: Tecnologia[] = [];

    @bindable tecnologiaCorrente: number;

    constructor(private tabelleService: TabelleService) {
        this.tabelleService.getTecnologieAttive()
            .then(response => {
                this.tecnologie = <Tecnologia[]>response.content;
            });
    }
}