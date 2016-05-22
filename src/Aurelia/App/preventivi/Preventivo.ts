import {Cliente} from '../clienti/Cliente';

export class Preventivo {
    public PreventivoNo: number;
    public Descrizione: string;
    public ClienteNo: number;
    public DataInvio: Date;
    public Stato: number;
    public DataAccettazione: Date;
    public Importo: number;
    public Note: string;

    public Cliente: Cliente;
}
