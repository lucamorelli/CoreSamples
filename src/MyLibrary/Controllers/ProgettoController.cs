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
    public class ProgettoController : Controller
    {
        private AttivitaDbContext db { get; set; }

        public ProgettoController(AttivitaDbContext db)
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

        [Route("[action]/{id:int}")]
        [HttpGet]
        public IEnumerable<Progetto> AttiviCliente(int id) {
            var progetti = db.Progetti.Where(prj => prj.ClienteNo == id && prj.Attivo)
                .OrderBy(prj => prj.Descrizione)
                .ToList();
            return progetti;
        }

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Progetto> Attivi()
        {
            var progetti = db.Progetti.Where(prj => prj.Attivo)
                .OrderBy(prj => prj.Descrizione)
                .ToList();
            return progetti;
        }
    }
}
