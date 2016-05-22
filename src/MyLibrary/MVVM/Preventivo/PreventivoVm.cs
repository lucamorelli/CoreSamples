using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Preventivo
{
    public class PreventivoVm
    {
        public int PreventivoNo { get; set; }
        public string Descrizione { get; set; }
        public int? ClienteNo { get; set; }
        public DateTime? DataInvio { get; set; }
        public int? Stato { get; set; }
        public DateTime? DataAccettazione { get; set; }
        public double? Importo { get; set; }
        public string Note { get; set; }
    }
}
