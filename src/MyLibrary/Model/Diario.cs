using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Diario
    {
        public int DiarioNo { get; set; }
        public string Titolo { get; set; }
        public string Contenuto { get; set; }
        public string Tags { get; set; }
        public DateTime TsInserimento { get; set; }
    }
}
