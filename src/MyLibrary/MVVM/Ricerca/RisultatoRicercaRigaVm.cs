using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Ricerca
{
    public class RisultatoRicercaRigaVm
    {
        public int AttivitaNo { get; set; }
        public string Descrizione { get; set; }
        public string Cliente { get; set; }
        public string Commessa { get; set; }
        public string Locazione { get; set; }
        public string Data { get; set; }
        public double NumOre { get; set; }
        public string Ore { get; set; }
        public string TipoAttivita { get; set; }
        public string DaDatturare { get; set; }
        public string Fatturato { get; set; }
        public string Progetto { get; set; }
    }
}
