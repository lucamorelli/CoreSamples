using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;
using MyLibrary.MVVM.Pagamento;
using MyLibrary.MVVM.Fattura;
using MyLibrary.Options;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.JsonPatch;
using MyLibrary.MVVM.Commessa;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc.Formatters;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class PagamentoController : Controller
    {
        private AttivitaDbContext db { get; set; }
        private IOptions<MyOptions> _siteSettings;
        private ILogger<PagamentoController> _logger { get; set; }

        public PagamentoController(AttivitaDbContext db, IOptions<MyOptions> siteSetting, ILogger<PagamentoController> logger)
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
            //    Microsoft.AspNetCore.Mvc.Formatters.JsonOutputFormatter jsonFormatter = formatter as Microsoft.AspNetCore.Mvc.Formatters.JsonOutputFormatter;
            //    if (jsonFormatter != null)
            //    {
            //        jsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //    }
            //}
            //var mvcOptions = context.HttpContext.RequestServices.GetRequiredService<IOptions<MvcOptions>>();
            //var formatter = mvcOptions.Value.OutputFormatters.OfType<JsonOutputFormatter>().First();
            //formatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            _logger.LogInformation("IEnumerable<string> Get() requested at {requestTime}", DateTime.Now);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetPagamento")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            _logger.LogInformation("Task<IActionResult> Get([FromRoute] int id) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pagamento = await db.Pagamenti
                .SingleAsync(att => att.PagamentoNo == id);

            if (pagamento == null)
            {
                return NotFound();
            }

            return Ok(pagamento);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Pagamento model)
        {
            _logger.LogInformation("void Post([FromBody]Pagamento model) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.db.Pagamenti.Add(model);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PagamentoExists(model.PagamentoNo))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetPagamento", new { id = model.PagamentoNo }, model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Pagamento model)
        {
            _logger.LogInformation("async Task<IActionResult> Put([FromRoute] int id, [FromBody] Pagamento diario) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != model.PagamentoNo)
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
                if (!PagamentoExists(id))
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

            Pagamento pagamento = await db.Pagamenti.SingleAsync(m => m.PagamentoNo == id);
            if (pagamento == null)
            {
                return NotFound();
            }

            db.Pagamenti.Remove(pagamento);
            await db.SaveChangesAsync();

            return Ok(pagamento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PagamentoExists(int id)
        {
            return db.Pagamenti.Count(e => e.PagamentoNo == id) > 0;
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch([FromRoute] int id, [FromBody] JsonPatchDocument<Pagamento> patchDoc)
        {
            if (patchDoc != null)
            {
                Pagamento pagamento = await db.Pagamenti.SingleAsync(m => m.PagamentoNo == id);

                patchDoc.ApplyTo(pagamento, ModelState);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                await db.SaveChangesAsync();

                return new ObjectResult(pagamento);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [Route("[action]/{id:int}")]
        [HttpGet]
        public IEnumerable<Pagamento> PagamentiCliente(int id) {
            var progetti = db.Pagamenti.Where(prj => prj.ClienteNo == id && prj.DataPagamento > DateTime.Today.AddYears(-1))
                .OrderBy(prj => prj.Descrizione)
                .ToList();
            return progetti;
        }

        [Route("[action]/{numRecord:int}")]
        [HttpGet]
        public IEnumerable<PagamentoVm> Ultimi(int numRecord)
        {
            var pagamenti = db.Pagamenti
                .Include( pag => pag.Cliente).Include(pag => pag.Commessa).Include(pag => pag.Fattura)
                .OrderByDescending(prj => prj.DataPagamento)
                .Take(numRecord)
                .ToList();

            var result = pagamenti.Select(pag => new PagamentoVm {
                ClienteNo = pag.ClienteNo,
                CommessaNo = pag.CommessaNo,
                DataPagamento = pag.DataPagamento,
                Descrizione = pag.Descrizione,
                FatturaNo = pag.FatturaNo,
                Importo = pag.Importo,
                InRiepilogo = pag.InRiepilogo,
                Note = pag.Note,
                PagamentoNo = pag.PagamentoNo,
                Cliente = new MVVM.Cliente.ClienteVm {
                    ClienteNo = pag.Cliente.ClienteNo,
                    Descrizione = pag.Cliente.Descrizione
                },
                Fattura = pag.Fattura != null ? new FatturaVm {
                    FatturaNo = pag.Fattura.FatturaNo,
                    NumeroDocumento = pag.Fattura.NumFattura + "/" + pag.Fattura.Anno
                } : null,
                Commessa = pag.Commessa !=  null ? new CommessaVm {
                    CommessaNo = pag.Commessa.CommessaNo,
                    Descrizione = pag.Commessa.Descrizione
                }  : null
                

            });
            return result;
        }

    }
}
