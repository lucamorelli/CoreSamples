using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyLibrary.Model;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using MyLibrary.Options;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc.Formatters;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyLibrary.Controllers
{
    [Route("api/[controller]")]
    public class DiarioController : Controller
    {
        private AttivitaDbContext db { get; set; }
        private IOptions<MyOptions> _siteSettings;
        private ILogger<DiarioController> _logger { get; set; }


        public DiarioController(AttivitaDbContext db, IOptions<MyOptions> siteSetting, ILogger<DiarioController> logger)
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
            //    if (jsonFormatter != null)
            //    {
            //        jsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //    }
            //}
            var mvcOptions = context.HttpContext.RequestServices.GetRequiredService<IOptions<MvcOptions>>();
            var formatter = mvcOptions.Value.OutputFormatters.OfType<JsonOutputFormatter>().First();
            formatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            _logger.LogInformation("IEnumerable<string> Get() requested at {requestTime}", DateTime.Now);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetDiario")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            _logger.LogInformation("Task<IActionResult> Get([FromRoute] int id) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var diario = await db.Diario
                .SingleAsync(att => att.DiarioNo == id);

            if (diario == null)
            {
                return NotFound();
            }

            return Ok(diario);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Diario model)
        {
            _logger.LogInformation("void Post([FromBody]Diario model) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.db.Diario.Add(model);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DiarioExists(model.DiarioNo))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetDiario", new { id = model.DiarioNo }, model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Diario model)
        {
            _logger.LogInformation("async Task<IActionResult> Put([FromRoute] int id, [FromBody] Diario diario) requested at {requestTime}", DateTime.Now);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != model.DiarioNo)
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
                if (!DiarioExists(id))
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

            Diario diario = await db.Diario.SingleAsync(m => m.DiarioNo == id);
            if (diario == null)
            {
                return NotFound();
            }

            db.Diario.Remove(diario);
            await db.SaveChangesAsync();

            return Ok(diario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DiarioExists(int id)
        {
            return db.Diario.Count(e => e.DiarioNo == id) > 0;
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch([FromRoute] int id, [FromBody] JsonPatchDocument<Diario> patchDoc)
        {
            if (patchDoc != null)
            {
                Diario diario = await db.Diario.SingleAsync(m => m.DiarioNo == id);

                patchDoc.ApplyTo(diario, ModelState);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                await db.SaveChangesAsync();

                return new ObjectResult(diario);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [Route("[action]/{last:int}")]
        [HttpGet]
        public IEnumerable<Diario> Ultimi(int last)
        {
            var clienti = db.Diario.OrderByDescending(cli => cli.TsInserimento).Take(last).ToList();
            return clienti;
        }
    }
}
