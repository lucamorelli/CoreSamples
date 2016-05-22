import {Pagamento} from 'Pagamento';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class PagamentoService {
    private url: string = "api/pagamento";

    constructor(public http: HttpClient) {

    }

    public aggiungi(item: Pagamento): Promise<HttpResponseMessage> {
        if (item.InRiepilogo == undefined)
            item.InRiepilogo = false;
        if (item.PagamentoNo == undefined)
            item.PagamentoNo = 0;
        return this.http.post(this.url, item);
    }

    public modifica(item: Pagamento): Promise<HttpResponseMessage> {

        return this.http.put(this.url + "/" + item.PagamentoNo, item);
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

    public registra(item: Pagamento): Promise<HttpResponseMessage> {
        if (item.PagamentoNo == undefined || item.PagamentoNo == 0)
            return this.aggiungi(item);
        else
            return this.modifica(item);
    }
    // end basic actions

    public pagamentiCliente(idCliente: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/PagamentiCliente/" + idCliente);
    }

    public ultimi(numRecord: number): Promise<HttpResponseMessage> {
        return this.http.get(this.url + "/Ultimi/" + numRecord);
    }

    //public aggiungi(pagamento: Pagamento): Promise<HttpResponseMessage> {
    //    if (pagamento.InRiepilogo == undefined)
    //        pagamento.InRiepilogo = false;
    //    pagamento.PagamentoNo = 0;
    //    return this.http.post(this.url, pagamento);
    //}

}