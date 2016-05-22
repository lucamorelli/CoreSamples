import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Pagamento} from '../pagamenti/Pagamento';
import {PagamentoService} from '../pagamenti/PagamentoService';

@autoinject
export class customerPayment {

    pagamenti: Pagamento[] = [];
    @bindable pagamentoCorrente: number;

    constructor(private pagamentoService: PagamentoService, private evtAgg: EventAggregator) {
        this.evtAgg.subscribe('customerChanged', (idCliente) => {
            this.pagamentoService.pagamentiCliente(idCliente)
                .then(response => {
                    this.pagamenti = <Pagamento[]>response.content;
                });
        });
    }
}