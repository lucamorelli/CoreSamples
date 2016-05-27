import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DialogService} from 'aurelia-dialog';
import {ValidationEngine, Validator, ValidationReporter} from 'aurelia-validatejs';

import {Attivita} from 'attivita/Attivita';
import {UltimaAttivitaVm} from 'attivita/UltimaAttivitaVm';
import {AttivitaService} from 'attivita/AttivitaService';

import {confirmOperation} from 'dialogs/confirmOperation';

@autoinject
export class insAttivita {
    heading = 'Inserimento Attività';

    attivitaCorrente: Attivita;

    hasValidated: boolean = false;
    validationMessages: string[];

    constructor(private http: HttpClient, private attivitaService: AttivitaService, private evtAgg: EventAggregator,
        private dialogService: DialogService) {
        this.attivitaCorrente = new Attivita();
        this.attivitaCorrente.Data = new Date();
    } 

    activate() {
    }
     
    canDeactivate() {
        return confirm('Are you sure you want to leave again?');
    }

    mostraDati(): void {
        this.hasValidated = true;
        this.validationMessages = [];

        var reporter: ValidationReporter = ValidationEngine.getValidationReporter(this);
        //this.validationGroup.validate()
        //    .then(result => {
        //        if (this.attivitaCorrente.AttivitaNo == undefined || this.attivitaCorrente.AttivitaNo == 0) {
        //            this.attivitaService.aggiungi(this.attivitaCorrente)
        //                .then(() => {
        //                    this.attivitaCorrente = new Attivita();
        //                    this.attivitaCorrente.Data = new Date();
        //                    this.evtAgg.publish('attivitaUpdated');
        //                });
        //        }
        //        else {
        //            this.attivitaService.modifica(this.attivitaCorrente)
        //                .then(() => {
        //                    this.attivitaCorrente = new Attivita();
        //                    this.attivitaCorrente.Data = new Date();
        //                    this.evtAgg.publish('attivitaUpdated');
        //                });
        //        }

        //    })
        //    .catch(result => {
        //        for (let prop in result.properties) {
        //            let thisProp = result.properties[prop];
        //            if (!thisProp.isValid) {
        //                this.validationMessages.push(prop + " " + thisProp.message);
        //            }
        //        }
        //    });
    }

    modificaRecord($event: CustomEvent): void {
        var attivita: UltimaAttivitaVm = $event.detail;

        this.attivitaCorrente = new Attivita();
        this.attivitaService.leggi(attivita.AttivitaNo)
            .then(response => {
                this.attivitaCorrente = <Attivita>response.content;
            });
    }

    cancellaRecord($event: CustomEvent): void {
        var attivita: UltimaAttivitaVm = $event.detail;

        this.dialogService.open({ viewModel: confirmOperation, model: 'confermate la cancellazione della attività?' }).then((result) => {
            if (!result.wasCancelled) {
                console.log('good');
                console.log(result.output);
                this.attivitaService.cancella(attivita.AttivitaNo)
                    .then(response => {
                        this.evtAgg.publish('attivitaUpdated');
                    });

            } else {
                console.log('bad');
            }
        });
    }

    aggiornaNote(): void {
        
        this.attivitaService.patch(this.attivitaCorrente.AttivitaNo, [{
            'op': 'replace',
            'path': '/Note',
            'value': this.attivitaCorrente.Note
        }])
            .then(response => {
                this.evtAgg.publish('attivitaUpdated');
            });
    }
}