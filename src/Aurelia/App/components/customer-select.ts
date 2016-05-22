import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Cliente} from '../clienti/Cliente';
import {ClientiService} from '../clienti/ClientiService';

@autoinject
export class customerSelect {

    //@bindable idCliente: number;
    clienti: Cliente[] = []; 
    @bindable clienteCorrente: number;
    @bindable soloAttivi: boolean;

    constructor(private clientiService: ClientiService, private evtAgg: EventAggregator) {
    }

    bind() {
        if (this.soloAttivi != undefined && this.soloAttivi) {
            this.clientiService.getAttivi()
                .then(response => {
                    this.clienti = <Cliente[]>response.content;
                });
        }
        else { 
            this.clientiService.getClienti()
                .then(response => {
                    this.clienti = <Cliente[]>response.content;
                });
        }

    }


    selezionaCliente(): void {
        //if (this.clienteCorrente != undefined) 
        //    this.idCliente = this.clienteCorrente.ClienteNo;
        //else
        //    this.idCliente = undefined;
        this.evtAgg.publish('customerChanged', this.clienteCorrente);
    }

    clienteCorrenteChanged() {
    }

    //idClienteChanged() {
    //    this.clienti.forEach(cliente => {
    //        if (cliente.ClienteNo == this.idCliente)  
    //            this.clienteCorrente = cliente;

    //    });
    //}


}