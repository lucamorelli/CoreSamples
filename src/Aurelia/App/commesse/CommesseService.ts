import {Commessa} from 'Commessa';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class CommesseService {
    private url: string = "api/Commessa";

    constructor(public http: HttpClient) {

    }

    public getCommesseOperative(idCliente: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/ListaOperative/" + idCliente);
    }

    public ultime(numRecord: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/ultimi/" + numRecord);
    }

    public nonTerminate(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/nonterminate");
    }

}