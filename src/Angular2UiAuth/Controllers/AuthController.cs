using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.AspNetCore.Mvc;
using CoreSamples.Helpers;
using MyLibrary.Model;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreSamples.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        AttivitaDbContext _db { get; set; }
        IMemoryCache _cache { get; set; }

        public AuthController(AttivitaDbContext dbContext, IMemoryCache cache) {
            this._db = dbContext;
            this._cache = cache;
        }

        // POST auth/login
        [HttpPost("login")]
        public ActionResult Login([FromBody]LoginVm model)
        {
            if (string.IsNullOrWhiteSpace(model.email))
                return BadRequest();
            if (string.IsNullOrWhiteSpace(model.password))
                return BadRequest();
            //var utente = _db.U.FirstOrDefault(usr => usr.Email == model.email && usr.PassWord == model.password && usr.Attivo);
            //if (utente == null)
            //    return Unauthorized();

            //var myToken = JwtHelper.GetJwtToken(utente.Email);
            var myToken = JwtHelper.GetJwtToken("luca@lucamorelli.it");
            var tokenData = new TokenData {
                Scadenza = DateTime.Now.AddMinutes(60),
                Token = myToken,
                //userId = utente.UtenteId
                userId = 1
            };

            var result = _cache.Set(
                tokenData.Token,
                tokenData,
                new MemoryCacheEntryOptions().SetAbsoluteExpiration(tokenData.Scadenza));

            return Json(new { token = myToken });
        }

        // POST auth/signup
        [HttpPost("signup")]
        public ActionResult Signup([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/facebook
        [HttpPost("facebook")]
        public ActionResult Facebook([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/google
        [HttpPost("google")]
        public ActionResult Google([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/github
        [HttpPost("github")]
        public ActionResult Github([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/instagram
        [HttpPost("instagram")]
        public ActionResult Instagram([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/linkedin
        [HttpPost("linkedin")]
        public ActionResult Linkedin([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/live
        [HttpPost("live")]
        public ActionResult WindowsLive([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/yahoo
        [HttpPost("yahoo")]
        public ActionResult Yahoo([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/twitter
        [HttpPost("twitter")]
        public ActionResult Twitter([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/foursquare
        [HttpPost("foursquare")]
        public ActionResult Foursquare([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        // POST auth/unlink
        [HttpPost("unlink")]
        public ActionResult UnlinkProvider([FromBody]string value)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }

        [HttpGet("me")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // PUT api/me
        [HttpPut("me")]
        public string Get(int id)
        {
            return "value";
        }
    }
}
