using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Commessa
{
    public class CommessaVm
    {
        public int CommessaNo { get; set; }
        public string Descrizione { get; set; }
        public string Cliente { get; set; }
        public double Importo { get; set; }
        public string Tipo { get; set; }
        public bool Operativa { get; set; }
        public bool Terminata { get; set; }
    }
}
