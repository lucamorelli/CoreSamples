import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
//import {bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';


import {SpeseService} from 'spese/SpeseService';
import {Spesa} from 'spese/Spesa';

//@bindable({
//    name: 'recordNumber',
//    attribute: 'record-number',
//    defaultValue: 0,
//    changeHandler: 'randomFunction'
//    defaultBindingMode: bindingMode.oneTime
//})
@autoinject
export class latestExpenses {

    spese: Spesa[] = [];
    @bindable recordNumber;
    @bindable showRowCommands: boolean;

    constructor(private speseService: SpeseService, private element: Element, private evtAgg: EventAggregator) {

        this.showRowCommands = false;

        this.evtAgg.subscribe('expenseUpdated', () => {
            this.speseService.getUltimeSpese(this.recordNumber)
                .then(response => {
                    this.spese = <Spesa[]>response.content;
                });
        });

    }

    bind() {
        console.log(this.recordNumber);
        this.speseService.getUltimeSpese(this.recordNumber)
            .then(response => {
                this.spese = <Spesa[]>response.content;
            });
    }

    public recordNumberChanged() {

    }

    public modifica(spesa: Spesa): void {

        let e = new CustomEvent('on-modifica-spesa', {
            detail: spesa,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

    public cancella(spesa: Spesa): void {
        let e = new CustomEvent('on-cancella-spesa', {
            detail: spesa,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

}