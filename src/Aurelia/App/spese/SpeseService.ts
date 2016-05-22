import {Spesa} from 'Spesa';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class SpeseService {
    private url: string = "api/Spesa";

    constructor(public http: HttpClient) {

    }

    public aggiungi(item: Spesa): Promise<HttpResponseMessage> {
        item.SpesaNo = 0;
        return this.http.post(this.url, item);
    }

    public modifica(item: Spesa): Promise<HttpResponseMessage> {

        return this.http.put(this.url + "/" + item.SpesaNo, item);
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

    public registra(item: Spesa): Promise<HttpResponseMessage> {
        if (item.SpesaNo == undefined || item.SpesaNo == 0)
            return this.aggiungi(item);
        else
            return this.modifica(item);
    }
    // end basic actions


    public getUltimeSpese(numRecord: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/Ultimi/" + numRecord);
    }

    public listaVoci(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/VociSpesa");
    }

}