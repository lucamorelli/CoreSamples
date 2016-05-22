import {Diario} from 'Diario';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class DiarioService {
    private url: string = "api/diario";

    // start basic actions
    constructor(private http: HttpClient) {

    }

    public aggiungi(item: Diario): Promise<HttpResponseMessage> {
        if (item.DiarioNo == undefined)
            item.DiarioNo = 0;
        return this.http.post(this.url, item);
    }

    public modifica(item: Diario): Promise<HttpResponseMessage> {

        return this.http.put(this.url + "/" + item.DiarioNo, item);
    }

    public leggi(itemId: number): Promise<HttpResponseMessage> {

        return this.http.get(this.url + "/" + itemId);
    }

    public cancella(itemId: number): Promise<HttpResponseMessage> {
        return this.http.delete(this.url + "/" + itemId);
    }

    public patch(itemId: number, myPatch): Promise<HttpResponseMessage> {
        return this.http.patch(this.url + "/" + itemId, myPatch);
    }

    public registra(item: Diario): Promise<HttpResponseMessage> {
        if (item.DiarioNo == undefined || item.DiarioNo == 0)
            return this.aggiungi(item);
        else
            return this.modifica(item);
    }
    // end basic actions

    public Ultimi(numero: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/Ultimi/" + numero);
    }

}