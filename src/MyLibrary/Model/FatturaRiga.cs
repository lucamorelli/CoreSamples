using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class FatturaRiga
    {
        public int FatturaRigaNo { get; set; }
        public int ?FatturaNo { get; set; }
        public int ?CommessaNo { get; set; }
        public double ?Importo { get; set; }
        public string Descrizione { get; set; }

        public Fattura Fattura { get; set; }
        public Commessa Commessa { get; set; }
    }
}
