using MyLibrary.MVVM.Cliente;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Attivita
{
    public class UltimaAttivitaVm
    {
        public int AttivitaNo { get; set; }
        public string Descrizione { get; set; }
        public double Ore { get; set; }
        public string Data { get; set; }
        public string DescCliente { get; set; }
        public string DescCommessa { get; set; }
        public string DescFattura { get; set; }
        public string DescLocazione { get; set; }
        public string DescPagamento { get; set; }
        public string DescTipo { get; set; }
        public string DescProgetto { get; set; }

        public ClienteVm Cliente { get; set; }

    }
}
