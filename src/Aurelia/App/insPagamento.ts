import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DialogService} from 'aurelia-dialog';


import {Pagamento} from 'pagamenti/Pagamento';
import {PagamentoService} from 'pagamenti/PagamentoService';

import {confirmOperation} from 'dialogs/confirmOperation';

@autoinject
export class insPagamento {
	public pagamentoCorrente: Pagamento;

    constructor(private http: HttpClient, private pagamentoService: PagamentoService, private evtAgg: EventAggregator,
        private dialogService: DialogService) {
		this.pagamentoCorrente = new Pagamento();
	} 
	
	//public registrazione(): void {
	//	this.pagamentoService.aggiungi(this.pagamentoCorrente).then((value) => {
	//		this.evtAgg.publish('fatturaAdded');
	//	});
 //   }

    public registrazione(): void {
        if (this.pagamentoCorrente.DataPagamento == undefined) {
            alert("Inserire la data");
            return;
        }
        if (this.pagamentoCorrente.Importo == undefined || this.pagamentoCorrente.Importo == 0) {
            alert("Inserire l'importo");
            return;
        }
        if (this.pagamentoCorrente.ClienteNo == undefined) {
            alert("Selezionare il cliente");
            return;
        }
        if (this.pagamentoCorrente.Descrizione == undefined || this.pagamentoCorrente.Descrizione == "") {
            alert("inserire la descrizione");
            return;
        }

        if (this.pagamentoCorrente.PagamentoNo == undefined || this.pagamentoCorrente.PagamentoNo == 0) {
            this.pagamentoService.aggiungi(this.pagamentoCorrente)
                .then(() => {
                    this.pagamentoCorrente = new Pagamento();
                    this.pagamentoCorrente.DataPagamento = new Date();
                    this.evtAgg.publish('paymentUpdated');
                });
        }
        else {
            this.pagamentoService.modifica(this.pagamentoCorrente)
                .then(() => {
                    this.pagamentoCorrente = new Pagamento();
                    this.pagamentoCorrente.DataPagamento = new Date();
                    this.evtAgg.publish('paymentUpdated');
                });
        }

        //      this.speseService.aggiungi(this.spesaCorrente).then((value) => {
        //          this.evtAgg.publish('expenseUpdated');
        //});
    }

    modificaRecord($event: CustomEvent): void {
        var pagamento: Pagamento = $event.detail;

        this.pagamentoCorrente = new Pagamento();
        this.pagamentoService.leggi(pagamento.PagamentoNo)
            .then(response => {
                this.pagamentoCorrente = <Pagamento>response.content;
            });
    }

    cancellaRecord($event: CustomEvent): void {
        var pagamento: Pagamento = $event.detail;

        this.dialogService.open({ viewModel: confirmOperation, model: 'confermate la cancellazione del pagamento?' }).then((result) => {
            if (!result.wasCancelled) {
                console.log('good');
                console.log(result.output);
                this.pagamentoService.cancella(pagamento.PagamentoNo)
                    .then(response => {
                        this.evtAgg.publish('expenseUpdated');
                    });

            } else {
                console.log('bad');
            }
        });
    }

}