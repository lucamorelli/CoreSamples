import {autoinject} from 'aurelia-framework';
import {FiltroRicerca} from 'ricerca/FiltroRicerca';
import {RicercaService} from 'ricerca/RicercaService';
import {RisultatoRiepilogoVm} from 'ricerca/RisultatoRiepilogoVm';
import {RisultatoRiepilogoDettaglioMeseClienteVm} from 'ricerca/RisultatoRiepilogoDettaglioMeseClienteVm';
import {RisultatoRiepilogoDettaglioMeseVm} from 'ricerca/RisultatoRiepilogoDettaglioMeseVm';

@autoinject
export class riepilogo {
    heading = 'Riepilogo Attività';

    risultato: RisultatoRiepilogoVm;
    clienteMeseCorrente: RisultatoRiepilogoDettaglioMeseClienteVm;

    constructor(private ricercaService: RicercaService) {
        this.ricercaService.riepilogo()
            .then(response => {
                this.risultato = <RisultatoRiepilogoVm>response.content;
            });
    }

    activate() {

    }

    canDeactivate() {
        return confirm('Are you sure you want to leave again?');
    }

    public datiClienteMese(datiGiornalieri: RisultatoRiepilogoDettaglioMeseVm): void {
        this.risultato.DatiClienti.forEach(datiCliente => {
            if (datiCliente.Mese == datiGiornalieri.Mese) {
                this.clienteMeseCorrente = datiCliente;
            }

        });
    }

}