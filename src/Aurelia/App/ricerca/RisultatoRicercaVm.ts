import {RisultatoRicercaNumValueVm} from 'RisultatoRicercaNumValueVm';
import {RisultatoRicercaRigaVm} from 'RisultatoRicercaRigaVm';

export class RisultatoRicercaVm {
    public Righe: RisultatoRicercaRigaVm[];
    public TotaliCommesse: RisultatoRicercaNumValueVm[];
    public TotaliClienti: RisultatoRicercaNumValueVm[];
    public Totale: number;
}
