import {autoinject} from 'aurelia-framework';
import {FiltroRicerca} from 'ricerca/FiltroRicerca';
import {RicercaService} from 'ricerca/RicercaService';
import {RisultatoRicercaVm} from 'ricerca/RisultatoRicercaVm';

@autoinject
export class ricerca {
    heading = 'Ricerca';

    filtro: FiltroRicerca;
    risultato: RisultatoRicercaVm;
    totSelezionate: number;

    constructor(private ricercaService: RicercaService) {
        this.filtro = new FiltroRicerca();
    }

    activate() {

    }

    canDeactivate() {
        return confirm('Are you sure you want to leave again?');
    }

    public eseguiRicerca(): void {
        this.ricercaService.ricerca(this.filtro)
            .then(response => {
                this.risultato = <RisultatoRicercaVm>response.content;
            });
    }

    public selezionaRiga(singolo): void {
        this.totSelezionate = 0;

        this.risultato.Righe.forEach(riga => {
            if (riga.selezionato != undefined && riga.selezionato)
                this.totSelezionate += riga.NumOre;
        });
    }
}