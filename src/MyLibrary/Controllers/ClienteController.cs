using System;
using System.Collections.Generic;
using System.Linq;
using MyLibrary.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ClienteController : Controller
    {
        private AttivitaDbContext db { get; set; }
        private IMemoryCache _memoryCache { get; set; }

        public ClienteController(AttivitaDbContext db, IMemoryCache memCache)
        {
            this.db = db;
            this._memoryCache = memCache;
        }

        /// <summary>
        /// riporta una lista dei clienti attivi ed operativi ordinati per descrizione
        /// </summary>
        /// <returns>tutti i clienti su cui si può operare</returns>
        [HttpGet]
        [Produces(typeof(IEnumerable<Cliente>))]
        public IEnumerable<Cliente> Get()
        {
            var keyName = "lst-Clienti";

            IEnumerable<Cliente> clienti = null;

            if (!_memoryCache.TryGetValue(keyName, out clienti))
            {
                clienti = db.Clienti
                    .Where(cli => cli.Attivo && cli.Operativo != null && cli.Operativo.Value).OrderBy(cli => cli.Descrizione)
                    .ToList();
                _memoryCache.Set(keyName, clienti, new MemoryCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(5)));
            }
            else {
                // per me in questo caso è inutile
                clienti = _memoryCache.Get(keyName) as IEnumerable<Cliente>;
            }

            return clienti;
        }

        /// <summary>
        /// legge l'oggetto cliente selezionato indicato come parametro
        /// </summary>
        /// <param name="id">id del cliente richiesto</param>
        /// <returns>se id corretto l'oggetto cliente</returns>
        [HttpGet("{id}")]
        [Produces(typeof(Cliente))]
        public Cliente Get(int id)
        {
            var cliente = db.Clienti.FirstOrDefault(cli => cli.ClienteNo == id);
            return cliente;
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

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Cliente> Lista()
        {
            var keyName = "lst-Clienti";

            IEnumerable<Cliente> clienti = null;

            if (!_memoryCache.TryGetValue(keyName, out clienti))
            {

                clienti = db.Clienti
                .Where(cli => cli.Attivo && cli.Operativo != null && cli.Operativo.Value)
                .OrderBy(cli => cli.Descrizione)
                .ToList();
                _memoryCache.Set(keyName, clienti, new MemoryCacheEntryOptions()
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(5)));
            }
            else
            {
                // per me in questo caso è inutile
                clienti = _memoryCache.Get(keyName) as IEnumerable<Cliente>;
            }


            return clienti;
        }

        [Route("[action]/{id:int}")]
        [HttpGet]
        public IEnumerable<Locazione> Locazioni(int id)
        {
            var clienti = db.Locazioni.Where(cli => cli.ClienteNo == id).OrderBy(cli => cli.Descrizione).ToList();
            return clienti;
        }

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Cliente> Attivi()
        {
            var clienti = db.Clienti.Where(cli => cli.Attivo).OrderBy(cli => cli.Descrizione).ToList();
            return clienti;
        }


    }
}
