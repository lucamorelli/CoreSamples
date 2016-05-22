using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Locazione
    {
        public int LocazioneNo { get; set; }
        public string Descrizione { get; set; }
        public int ?ClienteNo { get; set; }
        public int ?Distanza { get; set; }
        public string Note { get; set; }

        public Cliente Cliente { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
    }
}
