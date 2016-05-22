using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLibrary.Model
{
    public class Commessa
    {
        public int CommessaNo { get; set; }
        public string Descrizione { get; set; }
        public int? ClienteNo { get; set; }
        public int? PreventivoNo { get; set; }
        public double? Importo { get; set; }
        public string Note { get; set; }
        public int? TipoAttivitaNo { get; set; }
        public bool Terminata { get; set; }
        public bool AConsuntivo { get; set; }
        public bool DaFatturare { get; set; }
        public DateTime? DataEntrataFatturazione { get; set; }
        public double? OrePregresse { get; set; }
        public double? OrePreviste { get; set; }
        public int? ProgettoNo { get; set; }
        public DateTime? DataApertura { get; set; }
        public DateTime? DataChiusura { get; set; }
        public bool? EscludiAnalisi { get; set; }
        public bool? Operativa { get; set; }

        public virtual ICollection<Pagamento> Pagamenti { get; set; }
        public virtual ICollection<Attivita> Attivita { get; set; }
        public virtual ICollection<FatturaRiga> RigheFatture { get; set; }

        public Cliente Cliente { get; set; }
        public TipoAttivita Tipo { get; set; }
    }
}
