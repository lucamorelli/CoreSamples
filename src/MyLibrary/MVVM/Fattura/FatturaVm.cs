using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Fattura
{
    public class FatturaVm
    {
        public int FatturaNo { get; set; }
        public string NumeroDocumento { get; set; }
        public string Data { get; set; }
        public string Cliente { get; set; }
        public double Importo { get; set; }
    }
}
