using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.Extensions.Options;
using MyLibrary.Model;
using MyLibrary.Options;
using MyLibrary.MVVM.Attivita;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc.Formatters;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class AttivitaController : Controller
    {
        private AttivitaDbContext db { get; set; }
        private IOptions<MyOptions> _siteSettings;
        private ILogger<AttivitaController> _logger { get; set; }

        public AttivitaController(AttivitaDbContext db, IOptions<MyOptions> siteSetting, ILogger<AttivitaController>logger)
        {
            this.db = db;
            this._siteSettings = siteSetting;
            this._logger = logger;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);

            //var lstFormatters = this.BindingContext.OutputFormatters.ToList();
            //foreach (var formatter in lstFormatters)
            //{
            //    var jsonFormatter = formatter as Microsoft.AspNetCore.Mvc.Formatters.JsonOutputFormatter;
            //    if (jsonFormatter != null) {
            //        jsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //    }
            //}

            var mvcOptions = context.HttpContext.RequestServices.GetRequiredService<IOptions<MvcOptions>>();
            var formatter = mvcOptions.Value.OutputFormatters.OfType<JsonOutputFormatter>().First();
            formatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;


        }

        // GET: api/values
        [HttpGet]
        //[Route("[action]")]
        public IEnumerable<string> Get()
        {
            _logger.LogInformation("IEnumerable<string> Get() requested at {requestTime}", DateTime.Now);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id:int}", Name = "GetAttivita")]
        //[HttpGet]
        //[Route("[action]/{id:int}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            _logger.LogInformation("Task<IActionResult> Get([FromRoute] int id) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var attivita = await db.Attivita
                .Include(att => att.Cliente).Include(att => att.Commessa).Include(att => att.Fattura).Include(att => att.Locazione)
                .Include(att => att.Pagamento).Include(att => att.Tipo).Include(att => att.Progetto)
                .SingleAsync(att => att.AttivitaNo == id);

            if (attivita == null)
            {
                return NotFound();
            }

            return Ok(attivita);
        }

        // POST api/values
        [HttpPost]
        //        public void Post([FromBody]Attivita model)
        public async Task<IActionResult> Post([FromBody]Attivita model)
        {
            _logger.LogInformation("void Post([FromBody]Attivita model) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.db.Attivita.Add(model);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AttivitaExists(model.AttivitaNo))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetAttivita", new { id = model.AttivitaNo }, model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Attivita model)
        {
            _logger.LogInformation("async Task<IActionResult> Put([FromRoute] int id, [FromBody] Attivita diario) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != model.AttivitaNo)
            {
                return BadRequest();
            }

            db.Entry(model).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttivitaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return new StatusCodeResult(StatusCodes.Status204NoContent);

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            _logger.LogInformation("void Delete(int id) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Attivita attivita = await db.Attivita.SingleAsync(m => m.AttivitaNo == id);
            if (attivita == null)
            {
                return NotFound();
            }

            db.Attivita.Remove(attivita);
            await db.SaveChangesAsync();

            return Ok(attivita);
        }

        //[Route("[action]")]
        //[HttpPost]
        //public void AddAttivita([FromBody] Attivita model) {
        //    _logger.LogInformation("void AddAttivita([FromBody] AttivitaVm model) requested at {requestTime}", DateTime.Now);

        //    if (this.ModelState.ErrorCount > 0) {
        //        return;
        //    }

        //     this.db.Attivita.Add(model);
        //    this.db.SaveChanges();
        //}

        [Route("[action]/{last:int}")]
        [HttpGet]
        public IEnumerable<UltimaAttivitaVm> GetLatest(int last)
        {
            _logger.LogInformation("IEnumerable<UltimaAttivitaVm> GetLatest(int last) requested at {requestTime}", DateTime.Now);
            var atts = db.Attivita
                .Include(att => att.Cliente).Include(att => att.Commessa).Include(att => att.Fattura).Include(att => att.Locazione)
                .Include(att => att.Pagamento).Include(att => att.Tipo).Include(att => att.Progetto)
                .OrderByDescending(att => att.Data).ThenByDescending(att => att.AttivitaNo)
                .Take(last).ToList();

            return atts.Select(
                att => new UltimaAttivitaVm
                {
                    AttivitaNo = att.AttivitaNo,
                    Descrizione = att.Descrizione,
                    Ore = att.NumOre.Value,
                    Data = att.Data.Value.ToString("dd/MM/yyyy"),
                    DescCliente = att?.Cliente?.Descrizione,
                    DescCommessa = att?.Commessa?.Descrizione,
                    DescFattura = att?.Fattura?.NumFattura.Value.ToString(),
                    DescLocazione = att?.Locazione?.Descrizione,
                    DescPagamento = att?.Pagamento?.Descrizione,
                    DescTipo = att?.Tipo?.Descrizione,
                    DescProgetto = att?.Progetto?.Descrizione
                });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AttivitaExists(int id)
        {
            return db.Attivita.Count(e => e.AttivitaNo == id) > 0;
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch([FromRoute] int id, [FromBody] JsonPatchDocument<Attivita> patchDoc)
        {
            if (patchDoc != null)
            {
                Attivita attivita = await db.Attivita.SingleAsync(m => m.AttivitaNo == id);

                patchDoc.ApplyTo(attivita, ModelState);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                await db.SaveChangesAsync();

                return new ObjectResult(attivita);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

    }
}
