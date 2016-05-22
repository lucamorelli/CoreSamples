import {Fattura} from 'Fattura';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class FatturaService {
    private url: string = "api/fattura";

    constructor(private http: HttpClient) {

    }

    public ultimoAnno(): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/UltimoAnno");
    }

    public aggiungi(fattura: Fattura): Promise<HttpResponseMessage> {
        fattura.FatturaNo = 0;
        if (fattura.Saldata == undefined)
            fattura.Saldata = false;
        return this.http.post(this.url, fattura);
    }

    public fattureRecenti(recordNumber: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/ultime/" + recordNumber);
    }


}