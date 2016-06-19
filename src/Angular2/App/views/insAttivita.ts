import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FormBuilder, Control, Validators, FORM_PROVIDERS, ControlGroup} from '@angular/common';
import {OnInit} from '@angular/core';

import {FattureService, Fattura} from '../services/fatture_service';
import {ProgettiService, Progetto} from '../services/progetti_service';
import {PagamentiService, Pagamento} from '../services/pagamenti_service';

import {customerSelect, activityTypeSelect, customerOrderSelect, customerLocationSelect} from '../selects';

import {fieldConfiguration} from '../helpers/fieldConfiguration';

@Component({
    directives: [customerSelect, activityTypeSelect, customerOrderSelect, customerLocationSelect],
    selector: 'attivita',  
    templateUrl: '../views/insAttivita.html',
    providers: [HTTP_PROVIDERS, FORM_PROVIDERS, FattureService, ProgettiService, PagamentiService] 
})
export class InsAttivitaCmp implements OnInit {
    public Fatture: Fattura[];
    public Progetti: Progetto[];
    public Pagamenti: Pagamento[];

    public descrizione: string;
    public clienteNo: number;
    public commessaNo: number;
    public locazioneNo: number;
    public data: Date;
    public numOre: number;
    public daFatturare: boolean;
    public fatturato: boolean;
    public nonPrevisto: boolean;
    public note: string;
    public tipoAttivitaNo: number;
    public urgente: boolean;
    public fatturaNo: number;
    public progettoNo: number;
    public pagamentoNo: number;

    private formConfig: ControlGroup;
    private clienteConfiguration: fieldConfiguration;

    constructor(public fattureService: FattureService, public progettiService: ProgettiService,
        public pagamentiService: PagamentiService,
        private fb: FormBuilder) {


    }

    public ngOnInit() {
        this.formConfig = this.fb.group({
            cliente: [undefined, Validators.required],
            descrizione: ['', Validators.required],
            commessa: ['', Validators.required],
            data: ['', Validators.required],
            ore: ['', Validators.required],
            tipoAttivita: ['', Validators.required],
            locazione: ['', Validators.required],
            daFatturare: ['', Validators.required],
            fatturato: ['', Validators.required],
            nonPrevisto: ['', Validators.required],
            note: ['', Validators.required],
            urgente: ['', Validators.required],
            fattura: ['',],
            progetto: ['',],
            pagamento: ['',]
        })


        this.fattureService.ultimoAnno()
            .subscribe(data => {
                this.Fatture = data;
            }, err => {
                alert(err)
            }, () => {
                //                alert("fatto");
            }
            );
    }

    public selezionaCliente(clienteNo: number): void {
        this.clienteNo = clienteNo;

        this.progettiService.attiviCliente(this.clienteNo)
            .subscribe((data: Progetto[]) => {
                this.Progetti = data;
            }, err => {
                alert(err)
            }, () => {
//                alert("fatto");
            });

        this.pagamentiService.pagamentiCliente(this.clienteNo)
            .subscribe((data: Pagamento[]) => {
                this.Pagamenti = data;
            }, err => {
                alert(err)
            }, () => {
//                alert("fatto");
            });

    }

    public registra(): void {
//        console.log(this.formConfig.cliente);
        //alert(this.formConfig.cliente.valid);
    }

    public selezionaTipoAttivita(tipoAttivitaNo: number): void {
    }

    public selezionaCommessa(commessaNo: number): void {
    }

    public selezionaLocazione(locazioneNo: number): void {
    }
}