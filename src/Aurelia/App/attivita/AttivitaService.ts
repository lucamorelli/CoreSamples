import {Attivita} from 'Attivita';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class AttivitaService {
    private url: string = "api/Attivita";

    constructor(public http: HttpClient) {

    } 

    public registra(attivitaVm: Attivita): Promise<HttpResponseMessage> {
        if (attivitaVm.AttivitaNo == undefined || attivitaVm.AttivitaNo == 0)
            return this.aggiungi(attivitaVm);
        else
            return this.modifica(attivitaVm);
    }

    public aggiungi(attivitaVm: Attivita): Promise<HttpResponseMessage> {
        if (attivitaVm.AttivitaNo == undefined)
            attivitaVm.AttivitaNo = 0;

        if (attivitaVm.DaFatturare == undefined)
            attivitaVm.DaFatturare = false;
        if (attivitaVm.Fatturato == undefined)
            attivitaVm.Fatturato = false;
        if (attivitaVm.NonPrevisto == undefined)
            attivitaVm.NonPrevisto = false;

        return this.http.post(this.url, attivitaVm);
    }

    public modifica(attivitaVm: Attivita): Promise<HttpResponseMessage> {

        return this.http.put(this.url + "/" + attivitaVm.AttivitaNo, attivitaVm);
    }

    public getUltime(last: number): Promise<HttpResponseMessage> {
    
        return this.http.get(this.url + "/GetLatest/" + last);
    }

    public leggi(idAttivita: number): Promise<HttpResponseMessage> {

        return this.http.get(this.url + "/" + idAttivita);
    }

    public cancella(idAttivita: number): Promise<HttpResponseMessage> {
        return this.http.delete(this.url + "/" + idAttivita);
    }

    public patch(idAttivita: number, myPatch): Promise<HttpResponseMessage> {
        return this.http.patch(this.url + "/" + idAttivita, myPatch);
    }

}