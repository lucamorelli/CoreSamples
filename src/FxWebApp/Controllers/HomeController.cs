using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLibrary.Model;

namespace FxWebApp.Controllers
{
    public class HomeController : Controller
    {
        private AttivitaDbContext dbContext { get; set; }
        public HomeController(AttivitaDbContext DbContext) {
            dbContext = DbContext;
        }

        public IActionResult Index()
        {
            try
            {
                var clienti = dbContext.Clienti.ToList();
            }
            catch (Exception exc) {
            }
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
