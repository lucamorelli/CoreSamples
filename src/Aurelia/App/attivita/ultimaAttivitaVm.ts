import {Cliente} from '../clienti/Cliente';

export class UltimaAttivitaVm {
    public AttivitaNo: number;
    public Descrizione: string;
    public Ore: number;
    public Data: string;
    public DescCliente: string;
    public DescCommessa: string;
    public DescFattura: string;
    public DescLocazione: string;
    public DescPagamento: string;
    public DescTipo: string;
    public DescProgetto: string;

    public Cliente: Cliente;
}