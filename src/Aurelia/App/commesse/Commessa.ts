import {Cliente} from '../clienti/Cliente';
import {Progetto} from '../progetti/Progetto';
import {TipoAttivita} from '../tabelle/TipoAttivita';

export class Commessa {
    public CommessaNo: number;
    public Descrizione: string;
    public ClienteNo: number;
    public PreventivoNo: number; // <--
    public Importo: number;
    public Note: string;
    public TipoAttivitaNo: number; 
    public Terminata: boolean; 
    public AConsuntivo: boolean;
    public DaFatturare: boolean;
    public DataEntrataFatturazione: Date;
    public OrePregresse: number;
    public OrePreviste: number; 
    public ProgettoNo: number; 
    public DataApertura: Date;
    public DataChiusura: Date;
    public EscludiAnalisi: boolean;
    public Operativa: boolean;

    public Cliente: Cliente;
    public Progetto: Progetto;
    public Tipo: TipoAttivita;
}