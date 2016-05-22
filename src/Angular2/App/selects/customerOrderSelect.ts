import {Component, Provider, forwardRef} from '@angular/core';
import {Output, Input, EventEmitter, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";

import {CommesseService, Commessa} from '../services/commesse_service';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => customerOrderSelect),
        multi: true
    });

// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
@Component({
    selector: 'customer-order-select',
    templateUrl: './selects/customerOrderSelect.html',
    directives: [CORE_DIRECTIVES],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CommesseService]
})
export class customerOrderSelect implements ControlValueAccessor, OnInit {
    public Commesse: Commessa[];

    @Input()
    public clienteNo: number;

    public commessaNo: number;

    @Output()
    public selezioneCommessa: EventEmitter<number> = new EventEmitter();

    constructor(public commesseService: CommesseService) { 

    }

    public ngOnInit() {
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        for (let propName in changes) {
            let prop = changes[propName];
            let cur = JSON.stringify(prop.currentValue);
            let prev = JSON.stringify(prop.previousValue);

            if (propName == "clienteNo" && this.clienteNo != undefined) {
                this.commesseService.commesseCliente(this.clienteNo)
                    .subscribe(data => {
                        this.Commesse = data;
                    }, err => {
                        alert(err)
                    }, () => {
                        //                alert("fatto");
                    });
            }

        }
    }



    public selezionaCommessa($event: any): void {
        this.selezioneCommessa.emit(this.clienteNo);
    }

    //Placeholders for the callbacks
    private _onTouchedCallback: (_: any) => void = noop;

    private _onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any { return this.clienteNo; };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.commessaNo) {
            this.commessaNo = v;
            this._onChangeCallback(v);
        }
    }

    //Set touched on blur
    onTouched() {
        this._onTouchedCallback(undefined);
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        this.commessaNo = value;
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