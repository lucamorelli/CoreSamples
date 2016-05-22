using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class TabelleController : Controller
    {
        private AttivitaDbContext db { get; set; }

        public TabelleController(AttivitaDbContext db)
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

        [HttpGet]
        [Route("TipiAttivita")]
        public IEnumerable<TipoAttivita> TipiAttivita() {
            var tipiAttivita = db.TipiAttivita
                .OrderBy(cli => cli.Descrizione)
                .ToList();

            return tipiAttivita;
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Tecnologia> TecnologieAttive()
        {
            var tipiAttivita = db.Tecnologie
                .Where( cli => cli.Attiva)
                .OrderBy(cli => cli.Descrizione)
                .ToList();

            return tipiAttivita;
        }

    }
}
