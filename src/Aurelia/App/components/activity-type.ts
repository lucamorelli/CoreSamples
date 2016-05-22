import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

import {TipoAttivita} from 'tabelle/TipoAttivita';
import {TabelleService} from 'tabelle/TabelleService';

import {logMethod} from '../Helpers/Decorators';
import {logProperty} from '../Helpers/Decorators';
import {logClass} from '../Helpers/Decorators';

//@logClass
@autoinject
export class activityType {


//    @logProperty
    tipi: TipoAttivita[] = [];

    @bindable tipoAttivitaCorrente: number;

    constructor(private tabelleService: TabelleService) {
        this.tabelleService.getTipiAttivita()
            .then(response => {
                this.tipi = <TipoAttivita[]>response.content;
            });

        this.Multiply(5);
    }

//    @logMethod
    public Multiply(value: number): number {
        return value * 2;
    }

}