import {Component, Provider, forwardRef} from '@angular/core';
import {Output, Input, EventEmitter, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";

import {ClientiService, Locazione} from '../services';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => customerLocationSelect),
        multi: true
    });

// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
@Component({
    selector: 'customer-location-select',
    templateUrl: './selects/customerLocationSelect.html',
    directives: [CORE_DIRECTIVES],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ClientiService]
})
export class customerLocationSelect implements ControlValueAccessor, OnInit {
    public Locazioni: Locazione[];

    @Input()
    public clienteNo: number;

    public locazioneNo: number;

    @Output()
    public selezioneLocazione: EventEmitter<number> = new EventEmitter();

    constructor(public clientiService: ClientiService) { 

    }

    public ngOnInit() {
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        for (let propName in changes) {
            let prop = changes[propName];
            let cur = JSON.stringify(prop.currentValue);
            let prev = JSON.stringify(prop.previousValue);

            if (propName == "clienteNo" && this.clienteNo != undefined) {
                this.clientiService.locazioni(this.clienteNo)
                    .subscribe(data => {
                        this.Locazioni = data;
                    }, err => {
                        alert(err)
                    }, () => {
                        //                alert("fatto");
                    });
            }

        }
    }



    public selezionaLocazione($event: any): void {
        this.selezioneLocazione.emit(this.clienteNo);
    }

    //Placeholders for the callbacks
    private _onTouchedCallback: (_: any) => void = noop;

    private _onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any { return this.clienteNo; };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.locazioneNo) {
            this.locazioneNo = v;
            this._onChangeCallback(v);
        }
    }

    //Set touched on blur
    onTouched() {
        this._onTouchedCallback(undefined);
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        this.locazioneNo = value;
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