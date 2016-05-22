import {Cliente} from 'clienti/Cliente';
import {Commessa} from 'commesse/Commessa';
import {Locazione} from 'clienti/Locazione';
import {TipoAttivita} from 'tabelle/TipoAttivita';
import {Fattura} from 'fatture/Fattura';
import {Progetto} from 'progetti/Progetto';
import {Pagamento} from 'pagamenti/Pagamento';

//import {required, email} from 'aurelia-validatejs';

export class Attivita {
    public AttivitaNo: number;
    public Descrizione: string;
    public Cliente: Cliente;
    public Commessa: Commessa;
    public Locazione: Locazione;
    public Data: Date;
    public NumOre: number;
    public DaFatturare: boolean;
    public Fatturato: boolean;
    public NonPrevisto: boolean;
    public Note: string;
    public Tipo: TipoAttivita;
    public Urgente: boolean;
    public Fattura: Fattura;
    public Progetto: Progetto;
    public Pagamento: Pagamento;

    public ClienteNo: number;
    public CommessaNo: number;
    public LocazioneNo: number;
    public TipoAttivitaNo: number;
    public FatturaNo: number;
    public ProgettoNo: number;
    public PagamentoNo: number;

} 