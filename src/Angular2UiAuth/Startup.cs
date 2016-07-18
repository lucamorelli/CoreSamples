using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyLibrary.Model;
using Microsoft.EntityFrameworkCore;
using MyLibrary.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

// https://github.com/ronzeidman/ng2-ui-auth-example/blob/master/package.json
// https://github.com/ronzeidman/ng2-ui-auth
// https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js

namespace CoreSamples
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            if (env.IsDevelopment())
            {
                // This reads the configuration keys from the secret store.
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connString = Configuration["Data:AttivitaConnection:ConnectionString"];
            services.AddDbContext<AttivitaDbContext>(options =>
                options.UseSqlServer(connString))
                    .AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")
                    , p => p.MigrationsAssembly("Angular2UiAuth")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Add framework services.
            services.AddMvc();

            //  Register the OpenIddict services, includin gthe default EntityFramework stores.
            services.AddOpenIddict<ApplicationUser, ApplicationDbContext>()
                .DisableHttpsRequirement()
                .EnableTokenEndpoint("/connect/token")
                .AllowPasswordFlow()
                .UseJsonWebTokens();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var options = new DefaultFilesOptions
            {
                DefaultFileNames = new[] { "default.html", "index.html" }
            };
            app.UseDefaultFiles(options);

            app.UseStaticFiles();

            app.UseIdentity();
            app.UseOpenIddict();

            app.UseMvc();
        }
    }
}
