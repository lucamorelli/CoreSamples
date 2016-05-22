using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;

namespace ReactHotReload
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var application = new WebHostBuilder()
                  .UseContentRoot(Directory.GetCurrentDirectory())
                  //.UseConfiguration(WebApplicationConfiguration.GetDefault(args))
                  //.UseIISIntegration()
                  .UseKestrel()
                  .UseStartup<Startup>()
                  .Build();

            application.Run();
        }
    }
}
