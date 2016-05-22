import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DialogService} from 'aurelia-dialog';

import {Spesa} from 'spese/Spesa';
import {SpeseService} from 'spese/SpeseService';
import {VoceSpesa} from 'spese/VoceSpesa';

import {confirmOperation} from 'dialogs/confirmOperation';

@autoinject
export class insSpesa {
	public spesaCorrente: Spesa;

	constructor(private http: HttpClient, private speseService: SpeseService, private evtAgg: EventAggregator,
		private dialogService: DialogService) {
		this.spesaCorrente = new Spesa();
		this.spesaCorrente.Voce = new VoceSpesa();
		this.spesaCorrente.AttesaMovimento = false;
		this.spesaCorrente.NoContoCorrente = false;
	} 
	
	public registrazione(): void {
		if (this.spesaCorrente.Data == undefined) {
			alert("Inserire la data");
			return;
		}
		if (this.spesaCorrente.Importo == undefined || this.spesaCorrente.Importo == 0) {
			alert("Inserire l'importo");
			return;
		}
		if (this.spesaCorrente.VoceSpesaNo == undefined) {
			alert("Selezionare la voce spesa");
			return;
		}

		if (this.spesaCorrente.SpesaNo == undefined || this.spesaCorrente.SpesaNo == 0) {
			this.speseService.aggiungi(this.spesaCorrente)
				.then(() => {
					this.spesaCorrente = new Spesa();
					this.spesaCorrente.Data = new Date();
					this.evtAgg.publish('expenseUpdated');
				});
		}
		else {
			this.speseService.modifica(this.spesaCorrente)
				.then(() => {
					this.spesaCorrente = new Spesa();
					this.spesaCorrente.Data = new Date();
					this.evtAgg.publish('expenseUpdated');
				});
		}

  //      this.speseService.aggiungi(this.spesaCorrente).then((value) => {
  //          this.evtAgg.publish('expenseUpdated');
		//});
	}

	modificaRecord($event: CustomEvent): void {
		var spesa: Spesa = $event.detail;

		this.spesaCorrente = new Spesa();
		this.speseService.leggi(spesa.SpesaNo)
			.then(response => {
				this.spesaCorrente = <Spesa>response.content;
			});
	}

	cancellaRecord($event: CustomEvent): void {
		var spesa: Spesa = $event.detail;

		this.dialogService.open({ viewModel: confirmOperation, model: 'confermate la cancellazione della spesa?' }).then((result) => {
			if (!result.wasCancelled) {
				console.log('good');
				console.log(result.output);
				this.speseService.cancella(spesa.SpesaNo)
					.then(response => {
						this.evtAgg.publish('expenseUpdated');
					});

			} else {
				console.log('bad');
			}
		});
	}

}