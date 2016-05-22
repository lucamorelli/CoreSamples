import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// No need to specify the operator, just import and it will autopatch
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';

import {Cliente} from './clienti_service';

export class Fattura {
    public FatturaNo: number;
    public ClienteNo: number;
    public DataFattura: Date;

    public NumFattura: number;
    public Anno: number;
    public Saldata: boolean;
    public Note: string;
    public DataScadenza: Date;

    public get NumDocumento() {
        return this.NumFattura + "/" + this.Anno;
    }

    public Cliente: Cliente; 
}

@Injectable()
export class FattureService {
    _urlBase: string = '/api/Fattura';

    constructor(private http: Http) {
    }

    public ultimoAnno(): Observable<Fattura[]> {
        return this.http.get(this._urlBase + "/UltimoAnno")
            .map((res: Response) => res.json());
    }

}