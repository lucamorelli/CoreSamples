using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Ricerca
{
    public class RisultatoRiepilogoVm
    {
        public List<RisultatoRiepilogoDettaglioMeseVm> DatiGiornalieri { get; set; }
        public List<RisultatoRiepilogoDettaglioMeseClienteVm> DatiClienti { get; set; }
    }
}
