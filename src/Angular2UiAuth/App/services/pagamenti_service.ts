import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// No need to specify the operator, just import and it will autopatch
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';

import {Cliente} from './clienti_service'; 
import {Commessa} from './commesse_service';
import {Fattura} from './fatture_service';

export class Pagamento {
    public PagamentoNo: number;
    public ClienteNo: number;
    public CommessaNo: number;
    public DataPagamento: Date;
    public Importo: number;
    public Descrizione: string;
    public Note: string;
    public FatturaNo: number;
    public InRiepilogo: boolean; 

    public Cliente: Cliente;
    public Fattura: Fattura;
    public Commessa: Commessa;
}

@Injectable()
export class PagamentiService {
    _urlBase: string = '/api/Pagamento';

    constructor(private http: Http) {
    }

    public pagamentiCliente(idCliente: number): Observable<Pagamento[]> {
        return this.http.get(this._urlBase + "/PagamentiCliente/" + idCliente)
            .map((res: Response) => res.json());
    }

}