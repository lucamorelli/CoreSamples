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
using Redouble.AspNet.Webpack;

namespace ReactHotReload
{
    // https://github.com/frankwallis/WebpackAspnetMiddleware
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            Console.WriteLine(env.ContentRootPath);
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath);
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connString = Configuration["Data:AttivitaConnection:ConnectionString"];
            services.AddDbContext<AttivitaDbContext>(options =>
                options.UseSqlServer(connString));

            services.AddWebpack(configFile: "webpack.config.js", 
                publicPath: "/webpack/", 
                logLevel: WebpackLogLevel.Normal);
            // Add framework services.
            services.AddMvc();
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

            app.UseWebpackDevServer();
            app.UseWebpackHotReload();

            var options = new DefaultFilesOptions();
            options.DefaultFileNames = new[] { "default.html", "index.html" };
            app.UseDefaultFiles(options);


            app.UseStaticFiles();

            app.UseMvc();
        }
    }
}
