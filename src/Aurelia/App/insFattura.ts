import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Fattura} from 'fatture/Fattura';
import {FatturaService} from 'fatture/FatturaService';

@autoinject
export class insDiario {
    public fatturaCorrente: Fattura;

    constructor(private http: HttpClient, private fatturaService: FatturaService, private evtAgg: EventAggregator) {
        this.fatturaCorrente = new Fattura();
	} 
	
    public registrazione(): void {
        this.fatturaService.aggiungi(this.fatturaCorrente).then((value) => {
			this.evtAgg.publish('fatturaAdded');
		});
	}
}