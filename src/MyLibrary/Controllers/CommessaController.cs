using System;
using System.Collections.Generic;
using System.Linq;
using MyLibrary.Model;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.MVVM.Commessa;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class CommessaController : Controller
    {
        private AttivitaDbContext db { get; set; }

        public CommessaController(AttivitaDbContext db)
        {
            this.db = db;
        }

        [Route("[action]/{id:int}")]
        [HttpGet]
        public IEnumerable<Commessa> ListaOperative(int id)
        {
            var commesse = db.Commesse
                .Where(com => com.ClienteNo == id && com.Operativa.Value)
                .OrderBy(cli => cli.Descrizione)
                .ToList();

            return commesse;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
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

        [Route("[action]/{numRecord:int}")]
        [HttpGet]
        public IEnumerable<CommessaVm> Ultimi(int numRecord)
        {
            var commesse = db.Commesse
                .Include( com => com.Cliente).Include(com => com.Tipo)
                .OrderByDescending( com => com.CommessaNo)
                .Take(numRecord)
                .ToList();

            return commesse.Select(
                com => new CommessaVm {
                    CommessaNo = com.CommessaNo,
                    Descrizione = com.Descrizione,
                    Cliente = com.Cliente.Descrizione,
                    Importo = com.Importo != null ? com.Importo.Value : 0,
                    Operativa = com.Operativa != null ? com.Operativa.Value : false,
                    Terminata = com.Terminata,
                    Tipo = com.Tipo != null ? com.Tipo.Descrizione: string.Empty
                }
                );
        }

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Commessa> NonTerminate(int id)
        {
            var commesse = db.Commesse
                .Where(com => !com.Terminata)
                .OrderBy(cli => cli.Descrizione)
                .ToList();

            return commesse;
        }


    }
}
