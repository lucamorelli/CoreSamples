using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyLibrary.Model;
using MyLibrary.Options;

namespace Aurelia
{
    // https://github.com/aurelia/webpack-plugin
    // https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-typescript-webpack
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);
            if (env.IsDevelopment())
            {
                // This reads the configuration keys from the secret store.
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }
            builder.AddEnvironmentVariables();




            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connString = Configuration["Data:AttivitaConnection:ConnectionString"];
            services.AddDbContext<AttivitaDbContext>(options =>
                options.UseSqlServer(connString));

            // Add framework services.
            services.AddMvc();

            services.AddOptions();
            services.Configure<MyOptions>((options) => 
                options.ListElements = Convert.ToInt32(Configuration[@"Options:ListElements"])
                );
            // Configuration.GetSection(@"Options")
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseRuntimeInfoPage(); // default path is /runtimeinfo
            }

            var options = new DefaultFilesOptions
            {
                DefaultFileNames = new[] { "default.html", "index.html" }
            };
            app.UseDefaultFiles(options);

            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
