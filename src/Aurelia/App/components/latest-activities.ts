import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {AttivitaService} from 'attivita/AttivitaService';
import {UltimaAttivitaVm} from 'attivita/ultimaAttivitaVm';

@autoinject
export class latestActivities {

    attivita: UltimaAttivitaVm[] = [];
    @bindable recordNumber: number;
    @bindable showRowCommands: boolean;

    constructor(private attivitaService: AttivitaService, private element: Element, private evtAgg: EventAggregator) {
        this.recordNumber = 30;
        this.showRowCommands = false;

        this.evtAgg.subscribe('attivitaUpdated', () => {
            this.attivitaService.getUltime(this.recordNumber)
                .then(response => {
                    this.attivita = <UltimaAttivitaVm[]>response.content;
                });
        });

    }

    public bind() {
        console.log(this.showRowCommands);
        this.attivitaService.getUltime(this.recordNumber)
            .then(response => {
                this.attivita = <UltimaAttivitaVm[]>response.content;
            });
    }

    public recordNumberChanged() {

    }

    public modifica(attivita: UltimaAttivitaVm): void {

        let e = new CustomEvent('on-modifica-attivita', {
            detail: attivita,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

    public cancella(attivita: UltimaAttivitaVm): void {
        let e = new CustomEvent('on-cancella-attivita', {
            detail: attivita,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

}