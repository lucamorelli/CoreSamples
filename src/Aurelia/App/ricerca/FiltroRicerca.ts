export class FiltroRicerca {
    public ultimeOre: number;
    public primeOre: number;
    public ClienteNo: number;
    public CommessaNo: number;
    public ProgettoNo: number;
    public FatturaNo: number;
    public DtInizio: Date;
    public DtFine: Date;
    public TecnologiaNo: number;
    public TipoAttivitaNo: number;

    public attivitaNonFatturate: boolean;
    public urgenti: boolean;
    public escAttInterne: boolean;
    public flgDaFatturare: boolean;
    public flgSoloNonPreviste: boolean;
    public flgEscCommesseChiuse: boolean;
    public flgSenzaCommessa: boolean;
    public flgSenzaProgetto: boolean;

}