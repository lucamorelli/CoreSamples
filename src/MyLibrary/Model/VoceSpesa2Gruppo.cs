using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class VoceSpesa2Gruppo
    {
        public int GruppoVoceSpesaNo { get; set; }
        public GruppoVoceSpesa Gruppo { get; set; }

        public int VoceSpesaNo { get; set; }
        public VoceSpesa Voce { get; set; }
    }
}
