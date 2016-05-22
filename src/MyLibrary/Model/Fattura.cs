using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Fattura
    {
        public int FatturaNo { get; set;}
        public int ?ClienteNo { get; set; }
        public DateTime ?DataFattura { get; set; }
        public int ?NumFattura { get; set; }
        public int ?Anno { get; set; }
        public bool ?Saldata { get; set; }
        public string Note { get; set; }
        public DateTime ?DataScadenza { get; set; }

        public Cliente Cliente { get; set; }
        public virtual ICollection<Pagamento> Pagamenti { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
        public virtual ICollection<FatturaRiga> Righe { get; set; }
    }
}
