using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Spesa
    {
        public int SpesaNo { get; set; }
        public DateTime ?Data { get; set; }
        public double ?Importo { get; set; }
        public int ?VoceSpesaNo { get; set; }
        public string Note { get; set; }
        public byte[] TsRegistrazione { get; set; }
        public bool NoContoCorrente { get; set; }
        public bool AttesaMovimento { get; set; }
        public VoceSpesa Voce { get; set; }
    } 
}
