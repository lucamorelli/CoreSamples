import {Progetto} from 'Progetto';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class ProgettoService {
    private url: string = "api/progetto";

    constructor(public http: HttpClient) {

    }

    public attiviCliente(idCliente: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/AttiviCliente/" + idCliente);
    }

    public attivi(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/Attivi");
    }

}