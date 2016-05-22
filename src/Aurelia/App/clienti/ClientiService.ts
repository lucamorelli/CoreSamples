import {Cliente} from 'Cliente';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';
import {logProperty} from 'helpers/decorators';


@autoinject
export class ClientiService {
    //@logProperty
    private url: string = "api/Cliente/";

    constructor(public http: HttpClient) {

    } 

    public getClienti(): Promise<HttpResponseMessage>{
        return this.http.get(this.url + "Lista");
    }

    public getCliente(idCliente: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + idCliente);
    }


    public getLocazioni(idCliente: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "Locazioni/" + idCliente);
    }

    public getAttivi(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "Attivi");
    }

}