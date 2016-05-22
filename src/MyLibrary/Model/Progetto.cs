using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Progetto
    {
        public int ProgettoNo { get; set; }
        public string Descrizione { get; set; }
        public int ?ClienteNo { get; set; }
        public bool Attivo { get; set; }
        public string Note { get; set; }

        public Cliente Cliente { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
    }
}
