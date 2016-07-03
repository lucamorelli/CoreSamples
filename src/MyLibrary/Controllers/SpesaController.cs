using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyLibrary.Model;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using MyLibrary.MVVM.Spesa;
using Microsoft.AspNetCore.Http;
using MyLibrary.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc.Formatters;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class SpesaController : Controller
    {
        private AttivitaDbContext db { get; set; }
        private IOptions<MyOptions> _siteSettings;
        private ILogger<SpesaController> _logger { get; set; }

        public SpesaController(AttivitaDbContext db, IOptions<MyOptions> siteSetting, ILogger<SpesaController> logger)
        {
            this.db = db;
            this._siteSettings = siteSetting;
            this._logger = logger;
        }

        public override void OnActionExecuting(Microsoft.AspNetCore.Mvc.Filters.ActionExecutingContext context)
        {
            base.OnActionExecuting(context);


            //var mvcOptions = context.HttpContext.RequestServices.GetRequiredService<IOptions<MvcOptions>>();
            //var formatter = mvcOptions.Value.OutputFormatters.OfType<JsonOutputFormatter>().First();
            //formatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            //var lstFormatters = this.BindingContext.OutputFormatters.ToList();
            //foreach (var formatter in lstFormatters)
            //{
            //    var jsonFormatter = formatter as Microsoft.AspNetCore.Mvc.Formatters.JsonOutputFormatter;
            //    if (jsonFormatter != null)
            //    {
            //        jsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //    }
            //}

        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            _logger.LogInformation("IEnumerable<string> Get() requested at {requestTime}", DateTime.Now);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetSpesa")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            _logger.LogInformation("Task<IActionResult> Get([FromRoute] int id) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var spesa = await db.Spese
                .SingleAsync(att => att.SpesaNo == id);

            if (spesa == null)
            {
                return NotFound();
            }

            return Ok(spesa);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Spesa model)
        {
            _logger.LogInformation("void Post([FromBody]Spesa model) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.db.Spese.Add(model);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SpesaExists(model.SpesaNo))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetSpesa", new { id = model.SpesaNo }, model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Spesa model)
        {
            _logger.LogInformation("async Task<IActionResult> Put([FromRoute] int id, [FromBody] Spesa model) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != model.SpesaNo)
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
                if (!SpesaExists(id))
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

            Spesa spesa = await db.Spese.SingleAsync(m => m.SpesaNo == id);
            if (spesa == null)
            {
                return NotFound();
            }

            db.Spese.Remove(spesa);
            await db.SaveChangesAsync();

            return Ok(spesa);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SpesaExists(int id)
        {
            return db.Spese.Count(e => e.SpesaNo == id) > 0;
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch([FromRoute] int id, [FromBody] JsonPatchDocument<Spesa> patchDoc)
        {
            if (patchDoc != null)
            {
                Spesa spesa = await db.Spese.SingleAsync(m => m.SpesaNo == id);

                patchDoc.ApplyTo(spesa, ModelState);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                await db.SaveChangesAsync();

                return new ObjectResult(spesa);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [Route("[action]/{last:int}")]
        [HttpGet]
        public IEnumerable<SpesaVm> Ultimi(int last)
        {
            var clienti = db.Spese
                .Include( cli => cli.Voce)
                .OrderByDescending(cli => cli.TsRegistrazione).Take(last).ToList();
            var vm = clienti.Select(cli => new SpesaVm 
            {
                SpesaNo = cli.SpesaNo,
                Data = cli.Data,
                Importo = cli.Importo,
                VoceSpesaNo = cli.VoceSpesaNo,
                Note = cli.Note,
                NoContoCorrente = cli.NoContoCorrente,
                AttesaMovimento = cli.AttesaMovimento,
                Voce = new VoceSpesaVm {
                    VoceSpesaNo = cli.Voce.VoceSpesaNo,
                    Descrizione = cli.Voce.Descrizione
                }
            });
            return vm;
        }

        [Route("[action]")]
        [HttpGet]
        public IEnumerable<VoceSpesa> VociSpesa()
        {
            var clienti = db.VociSpesa
                .OrderBy(cli => cli.Descrizione).ToList();
            return clienti;
        }


    }
}
