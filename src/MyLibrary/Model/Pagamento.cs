using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Pagamento
    {
        public int PagamentoNo { get; set;  }
        public int ClienteNo { get; set; }
        public int ?CommessaNo { get; set; }
        public DateTime ?DataPagamento { get; set; }
        public double ?Importo { get; set; }
        public string Descrizione { get; set; }
        public string Note { get; set; }
        public int ?FatturaNo { get; set; }
        public bool InRiepilogo { get; set; }

        public Cliente Cliente { get; set; }
        public Commessa Commessa { get; set; }
        public Fattura Fattura { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
    }
}
