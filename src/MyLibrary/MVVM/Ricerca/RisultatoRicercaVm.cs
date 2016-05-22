using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Ricerca
{
    public class RisultatoRicercaVm
    {
        public List<RisultatoRicercaRigaVm> Righe { get; set; }
        public List<RisultatoRicercaNumValueVm> TotaliCommesse { get; set; }
        public List<RisultatoRicercaNumValueVm> TotaliClienti { get; set; }
        public double Totale { get; set; }
    }
}
