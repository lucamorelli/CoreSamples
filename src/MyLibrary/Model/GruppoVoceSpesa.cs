using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class GruppoVoceSpesa
    {
        public int GruppoVoceSpesaNo { get; set; }
        public string Descrizione { get; set; }
        public virtual ICollection<VoceSpesa2Gruppo> Voci { get; set; }
    }
}
