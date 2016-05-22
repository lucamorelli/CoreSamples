using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Spesa
{
    public class SpesaVm
    {
        public int SpesaNo { get; set; }
        public DateTime? Data { get; set; }
        public double? Importo { get; set; }
        public int? VoceSpesaNo { get; set; }
        public string Note { get; set; }
        public bool NoContoCorrente { get; set; }
        public bool AttesaMovimento { get; set; }
        public VoceSpesaVm Voce { get; set; }
    }
}
