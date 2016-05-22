using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class TipoAttivita
    {
        public int TipoAttivitaNo { get; set; }
        public string Descrizione { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
        public virtual ICollection<Commessa> Commesse { get; set; }
    }
}
