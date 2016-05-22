import {autoinject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {VoceSpesa} from 'spese/VoceSpesa';
import {SpeseService} from '../spese/SpeseService';

@autoinject
export class expenseVoice {

    vociSpesa: VoceSpesa[] = [];
    @bindable voceCorrente: number;

    constructor(private speseService: SpeseService, private evtAgg: EventAggregator) {

        this.speseService.listaVoci().then(response => {
            this.vociSpesa = <VoceSpesa[]>response.content;
            });
    }
}