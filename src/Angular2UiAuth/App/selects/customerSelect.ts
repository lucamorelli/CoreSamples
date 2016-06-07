import {Component, Provider, forwardRef} from '@angular/core';
import {Output, EventEmitter, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";

import {ClientiService, Cliente} from '../services/clienti_service';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => customerSelect),
        multi: true
    });

// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
@Component({
    selector: 'customer-select',
    templateUrl: './selects/customerSelect.html',
    //bindings: [ClientiService],
    directives: [CORE_DIRECTIVES],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ClientiService]
})
export class customerSelect implements ControlValueAccessor, OnInit {
    public Clienti: Cliente[];

    public clienteNo: number;

    @Output()
    public selezioneCliente: EventEmitter<number> = new EventEmitter();

    constructor(public clientiService: ClientiService) { 

    }

    public ngOnInit() {
        this.clientiService.lista()
            .subscribe(data => {
                this.Clienti = data;
            }, err => {
                alert(err)
            }, () => {
                //                alert("fatto");
            });
    }

    public selezionaCliente($event: any): void {
        this.selezioneCliente.emit(this.clienteNo);
    }

    //Placeholders for the callbacks
    private _onTouchedCallback: (_: any) => void = noop;

    private _onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any { return this.clienteNo; };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.clienteNo) {
            this.clienteNo = v;
            this._onChangeCallback(v);
        }
    }

    //Set touched on blur
    //onTouched() {
    //    this._onTouchedCallback(undefined);
    //}

    //From ControlValueAccessor interface
    writeValue(value: any) {
        this.clienteNo = value;
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