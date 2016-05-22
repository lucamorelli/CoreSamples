using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Ricerca
{
    public class RicercaVm
    {
        public int? ultimeOre { get; set; }
        public int? primeOre { get; set; }
        public int ? ClienteNo { get; set; }
        public int? CommessaNo { get; set; }
        public int? ProgettoNo { get; set; }
        public int? FatturaNo { get; set; }
        public DateTime? DtInizio { get; set; }
        public DateTime ? DtFine { get; set; }
        public int? TecnologiaNo { get; set; }
        public int? TipoAttivitaNo { get; set; }

        public bool ? attivitaNonFatturate { get; set; }
        public bool? urgenti { get; set; }
        public bool? escAttInterne { get; set; }
        public bool? flgDaFatturare { get; set; }
        public bool? flgSoloNonPreviste { get; set; }
        public bool? flgEscCommesseChiuse { get; set; }
        public bool? flgSenzaCommessa { get; set; }
        public bool? flgSenzaProgetto { get; set; }
    }
}
