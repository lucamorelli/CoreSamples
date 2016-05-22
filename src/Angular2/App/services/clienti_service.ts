import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

export class Cliente {
    ClienteNo: number;
    Descrizione: string;
}

export class Locazione {
    public LocazioneNo: number;
    public Descrizione: string;
    public ClienteNo: number;
 }


// https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
@Injectable()
export class ClientiService { 
    _urlBase: string = '/api/Cliente';

    constructor(private http: Http) {
    }

    public lista(): Observable<Cliente[]> {
        return this.http.get(this._urlBase + "/Lista")
            //            .map( res => res.text())
            .map((res: Response) => res.json());
    }

    public locazioni(idCliente: number): Observable<Locazione[]> {
        return this.http.get(this._urlBase + "/Locazioni/" + idCliente)
            .map((res: Response) => res.json());
    }

}