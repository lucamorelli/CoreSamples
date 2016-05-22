using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    [JsonObject]
    public class Attivita
    {
        public int AttivitaNo { get; set; }
        public string Descrizione { get; set; }
        public int ? ClienteNo { get; set; }
        public int? CommessaNo { get; set; }
        public int? LocazioneNo { get; set; }
        public DateTime? Data { get; set; }
        public double ?NumOre { get; set; }
        public string Note { get; set; }
        public bool DaFatturare { get; set; }
        public bool Fatturato { get; set; }
        public int ?TipoAttivitaNo { get; set; }
        public bool Urgente { get; set; }
        public int ?FatturaNo { get; set; }
        public int? ProgettoNo { get; set; }
        public bool? NonPrevisto { get; set; }
        public int? PagamentoNo { get; set; }

        public Cliente Cliente { get; set; }
        public Commessa Commessa { get; set; }
        public Locazione Locazione { get; set; }
        public TipoAttivita Tipo { get; set; }
        public Fattura Fattura { get; set; }
        public Progetto Progetto { get; set; }
        public Pagamento Pagamento { get; set; }
    }
}
