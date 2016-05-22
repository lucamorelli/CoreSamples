import {FiltroRicerca} from 'ricerca/FiltroRicerca';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';
import {FiltroRicercaDiario} from 'ricerca/FiltroRicercaDiario';

@autoinject
export class RicercaService {
    private url: string = "api/ricerca";

    constructor(private http: HttpClient) {

    }

    public ricerca(filtro: FiltroRicerca): Promise<HttpResponseMessage> {
        return this.http.post(this.url + "/Ricerca", filtro);
    }

    public ricercaDiario(filtro: FiltroRicercaDiario): Promise<HttpResponseMessage> {
        return this.http.post(this.url + "/RicercaDiario", filtro);
    }

    public riepilogo(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/Riepilogo");
    }

}