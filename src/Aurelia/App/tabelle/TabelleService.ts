import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class TabelleService {
    private url: string = "api/Tabelle/";

    constructor(public http: HttpClient) {

    } 

    public getTipiAttivita(): Promise<HttpResponseMessage>{
        return this.http.get(this.url + "TipiAttivita");
    }

    public getTecnologieAttive(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "TecnologieAttive");
    }

}