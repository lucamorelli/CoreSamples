using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;
using MyLibrary.MVVM.Ricerca;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class RicercaController : Controller
    {
        private AttivitaDbContext db { get; set; }

        public RicercaController(AttivitaDbContext db)
        {
            this.db = db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id:int}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        /*
            public TecnologiaNo: number;

        */

        [HttpPost]
        [Route("[action]")]
        public async Task<RisultatoRicercaVm> Ricerca([FromBody]RicercaVm filtro) {
            var risultato = db.Attivita
                .Include( att => att.Cliente).Include( att => att.Commessa).Include(att => att.Locazione)
                .Include(att => att.Tipo).Include(att => att.Progetto)
                .AsQueryable();

            if (filtro.ClienteNo != null)
                risultato = risultato.Where(att => att.ClienteNo == filtro.ClienteNo);
            if (filtro.CommessaNo != null)
                risultato = risultato.Where(att => att.CommessaNo == filtro.CommessaNo);
            if (filtro.ProgettoNo != null)
                risultato = risultato.Where(att => att.ProgettoNo == filtro.ProgettoNo);
            if (filtro.FatturaNo != null)
                risultato = risultato.Where(att => att.FatturaNo == filtro.FatturaNo);
            if (filtro.TipoAttivitaNo != null)
                risultato = risultato.Where(att => att.TipoAttivitaNo == filtro.TipoAttivitaNo);
            if (filtro.DtInizio != null)
                risultato = risultato.Where(att => att.Data >= filtro.DtInizio);
            if (filtro.DtFine != null) {
                DateTime dtRef = filtro.DtFine.Value.AddDays(1);
                risultato = risultato.Where(att => att.Data < dtRef);
            }
            if (filtro.urgenti != null && filtro.urgenti.Value)
                risultato = risultato.Where(att => att.Urgente);
            if (filtro.flgSenzaCommessa != null && filtro.flgSenzaCommessa.Value)
                risultato = risultato.Where(att => att.CommessaNo == null);
            if (filtro.flgSenzaProgetto != null && filtro.flgSenzaProgetto.Value)
                risultato = risultato.Where(att => att.ProgettoNo == null);
            if (filtro.flgSoloNonPreviste != null && filtro.flgSoloNonPreviste.Value)
                risultato = risultato.Where(att => att.NonPrevisto != null != att.NonPrevisto.Value);
            if (filtro.attivitaNonFatturate != null && filtro.attivitaNonFatturate.Value)
                risultato = risultato.Where(att => att.FatturaNo == null);
            if (filtro.flgDaFatturare != null && filtro.flgDaFatturare.Value)
                risultato = risultato.Where(att => att.DaFatturare);
            if (filtro.escAttInterne != null && filtro.escAttInterne.Value)
                risultato = risultato.Where(att => att.CommessaNo == null || att.Commessa.ClienteNo != 4);
            if (filtro.flgEscCommesseChiuse != null && filtro.flgEscCommesseChiuse.Value)
                risultato = risultato.Where(att => att.CommessaNo == null || !att.Commessa.Terminata );

            if (filtro.primeOre != null && filtro.primeOre.Value > 0)
                risultato = risultato.OrderBy(att => att.Data);
            if (filtro.ultimeOre != null && filtro.ultimeOre.Value > 0)
                risultato = risultato.OrderByDescending(att => att.Data);

            var daLeggere = await risultato.ToListAsync();
            var recordFinali = new List<RisultatoRicercaRigaVm>();

            var finale = new RisultatoRicercaVm();
            finale.Righe = new List<RisultatoRicercaRigaVm>();
            finale.Totale = 0;
            finale.TotaliClienti = new List<RisultatoRicercaNumValueVm>();
            finale.TotaliCommesse = new List<RisultatoRicercaNumValueVm>();

            Dictionary<int, RisultatoRicercaNumValueVm> totClienti = new Dictionary<int, RisultatoRicercaNumValueVm>();
            Dictionary<int, RisultatoRicercaNumValueVm> totCommesse = new Dictionary<int, RisultatoRicercaNumValueVm>();

            foreach ( var singolo in daLeggere) {
                var recordFinale = new RisultatoRicercaRigaVm();

                recordFinale.AttivitaNo = singolo.AttivitaNo;
                recordFinale.Descrizione = singolo.Descrizione;
                recordFinale.Data = singolo.Data.Value.ToString("dd/MM/yyyy");
                recordFinale.NumOre = singolo.NumOre.Value;
                recordFinale.Ore = singolo.NumOre.Value.ToString("0.0");
                recordFinale.DaDatturare = singolo.DaFatturare ? "Sì" : string.Empty;
                recordFinale.Fatturato = singolo.Fatturato ? "Sì" : string.Empty;

                recordFinale.Cliente = singolo?.Cliente?.Descrizione;
                recordFinale.Commessa = singolo?.Commessa?.Descrizione;
                recordFinale.Locazione = singolo?.Locazione?.Descrizione;
                recordFinale.TipoAttivita = singolo?.Tipo?.Descrizione;
                recordFinale.Progetto = singolo?.Progetto?.Descrizione;

                finale.Righe.Add(recordFinale);

                if (singolo.ClienteNo != null) {
                    RisultatoRicercaNumValueVm recCliente = null;
                    if (totClienti.ContainsKey(singolo.ClienteNo.Value))
                        recCliente = totClienti[singolo.ClienteNo.Value];
                    else {
                        recCliente = new RisultatoRicercaNumValueVm();
                        recCliente.Valore = 0;
                        recCliente.Chiave = singolo.Cliente.Descrizione;
                        totClienti[singolo.ClienteNo.Value] = recCliente;
                    }
                    recCliente.Valore += singolo.NumOre.Value;
                }

                if (singolo.CommessaNo != null)
                {
                    RisultatoRicercaNumValueVm recCliente = null;
                    if (totCommesse.ContainsKey(singolo.CommessaNo.Value))
                        recCliente = totCommesse[singolo.CommessaNo.Value];
                    else {
                        recCliente = new RisultatoRicercaNumValueVm();
                        recCliente.Valore = 0;
                        recCliente.Chiave = singolo.Commessa.Descrizione;
                        totCommesse[singolo.CommessaNo.Value] = recCliente;
                    }
                    recCliente.Valore += singolo.NumOre.Value;
                }


                if (filtro.primeOre != null && (filtro.primeOre.Value > finale.Totale))
                    break;
                if (filtro.ultimeOre != null && (filtro.ultimeOre.Value > finale.Totale))
                    break;
            }
            foreach (var totale in totClienti.Values)
                finale.TotaliClienti.Add(totale);
            foreach (var totale in totCommesse.Values)
                finale.TotaliCommesse.Add(totale);

            return finale;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<Diario[]> RicercaDiario([FromBody] RicercaDiarioVm filtro) {
            var risultato = db.Diario
                .AsQueryable();
            if (filtro.DtInizio != null)
                risultato = risultato.Where(di => di.TsInserimento >= filtro.DtInizio.Value);
            if (filtro.DtFine != null) {
                DateTime dtRef = filtro.DtFine.Value.AddDays(1);
                risultato = risultato.Where(di => di.TsInserimento < dtRef);
            }
            if (!string.IsNullOrWhiteSpace(filtro.Testo))
                risultato = risultato.Where(di => di.Tags.Contains(filtro.Testo)
                    || di.Titolo.Contains(filtro.Testo) || di.Contenuto.Contains(filtro.Testo));
            risultato = risultato.OrderByDescending(di => di.TsInserimento);

            return await risultato.ToArrayAsync();
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<RisultatoRiepilogoVm> Riepilogo()
        {
            DateTime dt = DateTime.Today;
            dt = new DateTime(dt.Year, dt.Month, DateTime.DaysInMonth(dt.Year, dt.Month));
            dt = dt.AddDays(1).AddYears(-1);
            var attivita = db.Attivita
                .Where(cli => cli.Data >= dt)
                .GroupBy(cli => new { mese = cli.Data.Value.Month, anno = cli.Data.Value.Year })
                .OrderByDescending(cli => cli.Key.anno).OrderByDescending(cli => cli.Key.mese)
                .ToList();

            var risultatoRiepilogo = new RisultatoRiepilogoVm();
            risultatoRiepilogo.DatiGiornalieri = new List<RisultatoRiepilogoDettaglioMeseVm>();

            // elaborazione dati giornalieri
            foreach (var datiMese in attivita) {
                var datiGiorno = datiMese.GroupBy(dm => dm.Data);

                var totMese = new RisultatoRiepilogoDettaglioMeseVm();
                totMese.Mese = datiMese.Key.mese + "/" + datiMese.Key.anno;
                totMese.Ore = new double[32];

                foreach (var singolo in datiGiorno) {
                    totMese.Ore[singolo.Key.Value.Day-1] = singolo.Sum(att => att.NumOre.Value);

                    totMese.Ore[31] += totMese.Ore[singolo.Key.Value.Day - 1];
                }

                risultatoRiepilogo.DatiGiornalieri.Add(totMese);
            }

            Dictionary<int, Cliente> clienti = new Dictionary<int, Cliente>();

            risultatoRiepilogo.DatiClienti = new List<RisultatoRiepilogoDettaglioMeseClienteVm>();
            // elaborazione dati cliente
            foreach (var datiMese in attivita)
            {
                var datiCliente = datiMese.GroupBy(dm => dm.ClienteNo);

                var totMese = new RisultatoRiepilogoDettaglioMeseClienteVm();
                totMese.Mese = datiMese.Key.mese + "/" + datiMese.Key.anno;
                risultatoRiepilogo.DatiClienti.Add(totMese);

                var lstClienti = new List<RisultatoRiepilogoDettaglioClienteVm>();
                foreach (var datoCliente in datiCliente) {
                    var recordCliente = new RisultatoRiepilogoDettaglioClienteVm();

                    if (clienti.ContainsKey(datoCliente.Key.Value))
                        recordCliente.Cliente = clienti[datoCliente.Key.Value].Descrizione;
                    else {
                        clienti[datoCliente.Key.Value] = await db.Clienti.SingleAsync(cli => cli.ClienteNo == datoCliente.Key.Value);
                        recordCliente.Cliente = clienti[datoCliente.Key.Value].Descrizione;
                    }
                    lstClienti.Add(recordCliente);

                    var datiGiorno = datoCliente.GroupBy(dm => dm.Data);

                    recordCliente.Ore = new double[32];

                    foreach (var singolo in datiGiorno)
                    {
                        recordCliente.Ore[singolo.Key.Value.Day - 1] = singolo.Sum(att => att.NumOre.Value);

                        recordCliente.Ore[31] += recordCliente.Ore[singolo.Key.Value.Day - 1];
                    }
                }
                totMese.Clienti = lstClienti.OrderByDescending( cli => cli.Ore[31]).ToArray();

            }

            return risultatoRiepilogo;
        }



    }
}
