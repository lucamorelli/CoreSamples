using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class VoceSpesa
    {
        public int VoceSpesaNo { get; set; }
        public string Descrizione { get; set; }
        public virtual ICollection<Spesa> Spese { get; set; }
        public virtual ICollection<VoceSpesa2Gruppo> Gruppi { get; set; }

    }
}
