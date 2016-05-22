import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Locazione} from 'clienti/Locazione';
import {ClientiService} from '../clienti/ClientiService';

@autoinject
export class customerLocation {

    locazioni: Locazione[] = [];
    @bindable locazioneCorrente: number;

    constructor(private clientiService: ClientiService, private evtAgg: EventAggregator) {
        this.evtAgg.subscribe('customerChanged', (idCliente) => {
            this.clientiService.getLocazioni(idCliente).then(response => {
                this.locazioni = <Locazione[]>response.content;
            });
        });
    }
}