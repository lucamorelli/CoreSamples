using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Tecnologia
    {
        public int TecnologiaNo { get; set; }
        public string Descrizione { get; set; }
        public int ?TipoTecnologiaNo { get; set; }
        public int ?ApiNo { get; set; }
        public bool Attiva { get; set; }

    }
}
