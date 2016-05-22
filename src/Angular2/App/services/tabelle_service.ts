import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
// No need to specify the operator, just import and it will autopatch
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';

export class TipoAttivita {
    TipoAttivitaNo: number;
    Descrizione: string; 
}


@Injectable()
export class TabelleService {
    _urlBase: string = '/api/Tabelle';

    constructor(private http: Http) {
    }

    public getTipiAttivita(): Observable<TipoAttivita[]> {
        return this.http.get(this._urlBase + "/TipiAttivita")
            .map((res: Response) => res.json());
    }

} 