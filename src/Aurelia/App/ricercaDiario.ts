import {autoinject} from 'aurelia-framework';
import {FiltroRicercaDiario} from 'ricerca/FiltroRicercaDiario';
import {RicercaService} from 'ricerca/RicercaService';
import {Diario} from 'Diario/Diario';

@autoinject
export class ricerca {
    heading = 'Ricerca Spesa';

    filtro: FiltroRicercaDiario;
    risultato: Diario[];
    totSelezionate: number;

    constructor(private ricercaService: RicercaService) {
        this.filtro = new FiltroRicercaDiario();
    }

    activate() {

    }

    canDeactivate() {
        return confirm('Are you sure you want to leave again?');
    }

    public eseguiRicerca(): void {
        this.ricercaService.ricercaDiario(this.filtro)
            .then(response => {
                this.risultato = <Diario[]>response.content;
            });
    }

}