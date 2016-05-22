using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;
using MyLibrary.MVVM.Fattura;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class FatturaController : Controller
    {
        private AttivitaDbContext db { get; set; }
        
        public FatturaController(AttivitaDbContext db)
        {
            this.db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Fattura> Get()
        {
            var clienti = db.Fatture.OrderByDescending(cli => cli.DataFattura).ToList();
            return clienti;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Fattura value)
        {
            db.Fatture.Add(value);
            db.SaveChanges();
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

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Fattura> UltimoAnno()
        {
            var clienti = db.Fatture
                .Where( ft => ft.DataFattura >= DateTime.Today.AddYears(-1))
                .OrderByDescending(cli => cli.DataFattura)
                .OrderByDescending(cli => cli.NumFattura)
                .ToList();
            return clienti;
        }

        [Route("[action]/{recNum:int}")]
        [HttpGet]
        public IEnumerable<FatturaVm> Ultime(int recNum)
        {
            var clienti = db.Fatture
                .OrderByDescending(cli => cli.DataFattura).ThenByDescending(cli => cli.NumFattura)
                .Include(cli => cli.Cliente).Include(cli => cli.Righe)
                .Take(recNum)
                .ToList();
            return clienti.Select( cli => new FatturaVm {
                FatturaNo = cli.FatturaNo,
                Cliente = cli.Cliente.Descrizione,
                Data = cli.DataFattura.Value.ToString("dd/MM/yyyy"),
                Importo = cli.Righe.Sum( rg => rg.Importo.Value),
                NumeroDocumento = cli.NumFattura.Value + "/" + cli.Anno.Value
            }).ToList();
        }
        
    }
}
