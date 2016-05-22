using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Cliente
    {
        public int ClienteNo { get; set; }

        public string Descrizione { get; set; }

        public bool Attivo { get; set; }

        public string Note { get; set; }

        public string Colore { get; set; }

        public bool? Operativo { get; set; }

        public virtual ICollection<Locazione> Locazioni { get; set; }
        public virtual ICollection<Fattura> Fatture { get; set; }
        public virtual ICollection<Progetto> Progetti { get; set; }
        public virtual ICollection<Pagamento> Pagamenti { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
        public virtual ICollection<Preventivo> Preventivi { get; set; }
        public virtual ICollection<Commessa> Commesse { get; set; }
    }
}
