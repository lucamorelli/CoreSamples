import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {DiarioService} from 'diario/DiarioService';
import {Diario} from 'diario/Diario';

@autoinject
export class latestDiario {

    ultimi: Diario[] = [];
    @bindable recordNumber: number;
    @bindable showRowCommands: boolean;

    constructor(private diarioService: DiarioService, private element: Element, private evtAgg: EventAggregator) {
        this.recordNumber = 30;
        this.showRowCommands = false;

        this.evtAgg.subscribe('diarioUpdated', () => {
            this.diarioService.Ultimi(this.recordNumber)
                .then(response => {
                    this.ultimi = <Diario[]>response.content;
                });
        });
    }

    public bind() {
        console.log(this.showRowCommands);
        this.diarioService.Ultimi(this.recordNumber)
            .then(response => {
                this.ultimi = <Diario[]>response.content;
            });
    }

    public recordNumberChanged() {

    }

    public modifica(diario: Diario): void {

        let e = new CustomEvent('on-modifica-diario', {
            detail: diario,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

    public cancella(diario: Diario): void {
        let e = new CustomEvent('on-cancella-diario', {
            detail: diario,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

}