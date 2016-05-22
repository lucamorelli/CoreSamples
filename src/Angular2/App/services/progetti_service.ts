import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// No need to specify the operator, just import and it will autopatch
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';

export class Progetto {
    public ProgettoNo: number;
    public Descrizione: string;
    public ClienteNo: number;
    public Attivo: boolean; 
    public Note: string;
}

@Injectable()
export class ProgettiService {
    _urlBase: string = '/api/Progetto';

    constructor(private http: Http) {
    }

    public attiviCliente(idCliente: number): Observable<Progetto[]> {
        return this.http.get(this._urlBase + "/AttiviCliente/" + idCliente)
            .map((res: Response) => res.json());
    }

} 