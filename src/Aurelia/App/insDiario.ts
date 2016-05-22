import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Diario} from 'diario/Diario';
import {DiarioService} from 'diario/DiarioService';

@autoinject
export class insDiario {
	public voceCorrente: Diario;

	constructor(private http: HttpClient, private diarioService: DiarioService, private evtAgg: EventAggregator) {
		this.voceCorrente = new Diario();
		this.voceCorrente.TsInserimento = new Date();
    } 

    activate() {
    }

    canDeactivate() {
        return confirm('Are you sure you want to leave again?');
    }

	
    public registrazione(): void {
        if (this.voceCorrente.Titolo == undefined || this.voceCorrente.Titolo.trim() == '') {
            alert('inserire il titolo');
            return;
        } 

        if (this.voceCorrente.Contenuto == undefined || this.voceCorrente.Contenuto.trim() == '') {
            alert('inserire il Contenuto');
            return;
        }

        if (this.voceCorrente.TsInserimento == undefined) {
            alert('inserire la Data');
            return;
        }


        if (this.voceCorrente.DiarioNo == undefined || this.voceCorrente.DiarioNo == 0) {
            this.diarioService.aggiungi(this.voceCorrente)
                .then(() => {
                    this.voceCorrente = new Diario();
                    this.voceCorrente.TsInserimento = new Date();
                    this.evtAgg.publish('diarioUpdated');
                });
        }
        else {
            this.diarioService.modifica(this.voceCorrente)
                .then(() => {
                    this.voceCorrente = new Diario();
                    this.voceCorrente.TsInserimento = new Date();
                    this.evtAgg.publish('diarioUpdated');
                });
        }


		//this.diarioService.aggiungi(this.voceCorrente).then((value) => {
		//	this.evtAgg.publish('diarioUpdated');
		//});
    }

    modificaRecord($event: CustomEvent): void {
        var diario: Diario = $event.detail;

        this.voceCorrente = new Diario();
        this.diarioService.leggi(diario.DiarioNo)
            .then(response => {
                this.voceCorrente = <Diario>response.content;
            });
    }

    cancellaRecord($event: CustomEvent): void {
        var diario: Diario = $event.detail;


        if (confirm("confermate la cancellazione del diario " + diario.Titolo + " del " + diario.TsInserimento)) {
            this.diarioService.cancella(diario.DiarioNo)
                .then(response => {
                    this.evtAgg.publish('attivitaUpdated');
                });
        }
    }

}