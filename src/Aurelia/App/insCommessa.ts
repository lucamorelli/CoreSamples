import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Commessa} from 'commesse/Commessa';
import {CommesseService} from 'commesse/CommesseService';

@autoinject
export class insCommessa {
    public commessaCorrente: Commessa;

    constructor(private http: HttpClient, private commessaService: CommesseService, private evtAgg: EventAggregator) {
        this.commessaCorrente = new Commessa();
	} 
	
    public registrazione(): void {
  //      this.fatturaService.aggiungi(this.fatturaCorrente).then((value) => {
		//	this.evtAgg.publish('fatturaAdded');
		//});
	}
}