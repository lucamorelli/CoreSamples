import {Component, Provider, forwardRef} from '@angular/core';
import {Output, EventEmitter, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";

import {TabelleService, TipoAttivita} from '../services/tabelle_service';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => activityTypeSelect),
        multi: true
    });

// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
@Component({
    selector: 'activity-type-select',
    templateUrl: './selects/activityTypeSelect.html',
    directives: [CORE_DIRECTIVES],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, TabelleService]
})
export class activityTypeSelect implements ControlValueAccessor, OnInit {
    public TipiAttivita: TipoAttivita[];

    public tipoAttivitaNo: number;

    //@Input()

    @Output()
    public selezioneTipoAttivita: EventEmitter<number> = new EventEmitter();

    constructor(public tabelleService: TabelleService) { 

    }

    public ngOnInit() {
        this.tabelleService.getTipiAttivita()
            .subscribe(data => {
                this.TipiAttivita = data;
            }, err => {
                alert(err)
            }, () => {
                //                alert("fatto");
            });
    }

    public selezionaTipoAttivita($event: any): void {
        this.selezioneTipoAttivita.emit(this.tipoAttivitaNo);
    }

    //Placeholders for the callbacks
    private _onTouchedCallback: (_: any) => void = noop;

    private _onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any { return this.tipoAttivitaNo; };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.tipoAttivitaNo) {
            this.tipoAttivitaNo = v;
            this._onChangeCallback(v);
        }
    }

    //Set touched on blur
    onTouched() {
        this._onTouchedCallback(undefined);
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        this.tipoAttivitaNo = value;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this._onTouchedCallback = fn;
    }
}