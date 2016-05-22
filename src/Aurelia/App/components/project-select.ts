import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Progetto} from '../progetti/Progetto';
import {ProgettoService} from '../progetti/ProgettoService';

@autoinject
export class projectSelect {

    progetti: Progetto[] = [];
    @bindable progettoCorrente: number;

    constructor(private progettoService: ProgettoService, private evtAgg: EventAggregator) {
    }

    public bind() {
        this.progettoService.attivi()
            .then(response => {
                this.progetti = <Progetto[]>response.content;
            });
    }
}