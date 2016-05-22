import {Cliente} from 'clienti/Cliente';
import {computedFrom} from 'aurelia-framework';


export class Fattura {
    public FatturaNo: number;
    public ClienteNo: number;
    public DataFattura: Date;

    public NumFattura: number;
    public Anno: number;
    public Saldata: boolean;
    public Note: string;
    public DataScadenza: Date;

    @computedFrom('NumFattura', 'Anno')
    public get NumDocumento(): string {
        return this.NumFattura + "/" + this.Anno;
    } 

    //set bar(theBar: Boolean) {
    //    this._bar = theBar;
    //}

    public Cliente: Cliente;
}
