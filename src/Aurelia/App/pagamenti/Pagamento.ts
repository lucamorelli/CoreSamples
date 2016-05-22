import {Cliente} from 'clienti/Cliente';
import {Commessa} from 'commesse/Commessa';
import {Fattura} from 'fatture/Fattura';

export class Pagamento {
    public PagamentoNo: number;
    public ClienteNo: number;
    public CommessaNo: number;
    public DataPagamento: Date;
    public Importo: number;
    public Descrizione: string;
    public Note: string;
    public FatturaNo: number;
    public InRiepilogo: boolean;

    public Cliente: Cliente;
    public Fattura: Fattura;
    public Commessa: Commessa;
}