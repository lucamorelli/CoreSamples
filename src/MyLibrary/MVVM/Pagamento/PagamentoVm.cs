using MyLibrary.MVVM.Cliente;
using MyLibrary.MVVM.Commessa;
using MyLibrary.MVVM.Fattura;
using System;

namespace MyLibrary.MVVM.Pagamento
{
    public class PagamentoVm
    {
        public int PagamentoNo { get; set; }
        public int ClienteNo { get; set; }
        public int? CommessaNo { get; set; }
        public DateTime? DataPagamento { get; set; }
        public double? Importo { get; set; }
        public string Descrizione { get; set; }
        public string Note { get; set; }
        public int? FatturaNo { get; set; }
        public bool InRiepilogo { get; set; }

        public ClienteVm Cliente { get; set; }
        public CommessaVm Commessa { get; set; }
        public FatturaVm Fattura { get; set; }

    }
}
