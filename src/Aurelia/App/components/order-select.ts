import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {Commessa} from '../commesse/Commessa';
import {CommesseService} from '../commesse/CommesseService';

@autoinject
export class orderSelect {

    commesse: Commessa[] = [];

    //@bindable idCommessa: number;
    @bindable commessaCorrente: number;

    constructor(private commessaService: CommesseService, private evtAgg: EventAggregator) {
    }

    public bind() {
        this.commessaService.nonTerminate()
            .then(response => {
                this.commesse = <Commessa[]>response.content;
            });
    }

    public idCommessaChanged() {
        //this.commesse.forEach(commessa => {
        //    if (commessa.CommessaNo == this.idCommessa)
        //        this.commessaCorrente = commessa;

        //});

    } 
}