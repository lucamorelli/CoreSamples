using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;
using MyLibrary.MVVM.Preventivo;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class PreventivoController : Controller
    {
        private AttivitaDbContext db { get; set; }
        
        public PreventivoController(AttivitaDbContext db)
        {
            this.db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Preventivo> Get()
        {
            var clienti = db.Preventivi.OrderByDescending(cli => cli.DataInvio).ToList();
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
        public void Post([FromBody]Preventivo value)
        {
            db.Preventivi.Add(value);
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
        public IEnumerable<PreventivoVm> UltimoAnno()
        {
            var clienti = db.Preventivi.Where( ft => ft.DataInvio >= DateTime.Today.AddYears(-1)).OrderByDescending(cli => cli.DataInvio).ToList();
            return clienti.Select(prev => new PreventivoVm {
                PreventivoNo = prev.PreventivoNo,
                Descrizione = prev.Descrizione,
                ClienteNo = prev.ClienteNo,
                DataInvio = prev.DataInvio,
                Stato = prev.Stato,
                DataAccettazione = prev.DataAccettazione,
                Importo = prev.Importo,
                Note = prev.Note
            }) ;
        }
        
    }
}
