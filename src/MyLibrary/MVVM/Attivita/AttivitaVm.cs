using MyLibrary.Model;
using MyLibrary.MVVM.Pagamento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.MVVM.Attivita
{
    public class AttivitaVm
    {
        public int AttivitaNo { get; set; }
        public string Descrizione { get; set; }
        
        public Model.Cliente Cliente { get; set; }
        public Model.Commessa Commessa { get; set; }
        public Locazione Locazione { get; set; }
        public DateTime Data { get; set; }
        public int Ore { get; set; }
        public bool DaFatturare { get; set; }
        public bool Fatturato { get; set; }
        public bool NonPrevisto { get; set; }
        public string Note { get; set; }
        public TipoAttivita TipoAttivita { get; set; }
        public bool Urgente { get; set; }
        public Model.Fattura Fattura { get; set; }
        public Progetto Progetto { get; set; }
        public PagamentoVm Pagamento { get; set; }

        public int ?ClienteNo { get; set; }
        public int ?CommessaNo { get; set; }
        public int ?LocazioneNo { get; set; }
        public int ?TipoAttivitaNo { get; set; }
        public int ?FatturaNo { get; set; }
        public int ?ProgettoNo { get; set; }
        public int? PagamentoNo { get; set; }
    }
}
