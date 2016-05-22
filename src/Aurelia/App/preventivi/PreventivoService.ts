import {Preventivo} from 'Preventivo';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class PreventivoService {
    private url: string = "api/preventivo";

    constructor(public http: HttpClient) {

    }

    public ultimoAnno(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/UltimoAnno");
    }

}