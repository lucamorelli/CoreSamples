import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// No need to specify the operator, just import and it will autopatch
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';

// http://stackoverflow.com/questions/28910864/angular-2-how-to-use-import-the-http-module

export class Commessa {
    public CommessaNo: number;
    public Descrizione: string;
    public ClienteNo: number;
    public PreventivoNo: number; 
    public Importo: number;
    public Note: string;
    public TipoAttivitaNo: number;
}

// https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
@Injectable()
export class CommesseService {
    _urlBase: string = '/api/Commessa';

    constructor(private http: Http) {
    }

    public commesseCliente(idCliente: number): Observable<Commessa[]> {
        return this.http.get(this._urlBase + "/ListaOperative/" + idCliente)
            .map((res: Response) => res.json());
    }

}