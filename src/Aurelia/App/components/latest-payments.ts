import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
//import {bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {PagamentoService} from 'pagamenti/PagamentoService';
import {Pagamento} from 'pagamenti/Pagamento';

@autoinject
export class latestPayments {

    pagamenti: Pagamento[] = [];
    @bindable recordNumber;
    @bindable showRowCommands: boolean;

    constructor(private pagamentoService: PagamentoService, private element: Element, private evtAgg: EventAggregator) {
        this.recordNumber = 30;
        this.showRowCommands = false;

        this.evtAgg.subscribe('paymentUpdated', () => {
            this.pagamentoService.ultimi(this.recordNumber)
                .then(response => {
                    this.pagamenti = <Pagamento[]>response.content;
                });
        });
    }

    bind() {
        this.pagamentoService.ultimi(this.recordNumber)
            .then(response => {
                this.pagamenti = <Pagamento[]>response.content;
            });
    }

    public recordNumberChanged() {

    }

    public modifica(pagamento: Pagamento): void {

        let e = new CustomEvent('on-modifica-pagamento', {
            detail: pagamento,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

    public cancella(pagamento: Pagamento): void {
        let e = new CustomEvent('on-cancella-pagamento', {
            detail: pagamento,
            bubbles: true
        });
        this.element.dispatchEvent(e);
    }

}