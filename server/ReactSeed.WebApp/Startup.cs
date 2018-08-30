using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;

namespace ReactSeed.WebApp
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddMvc();
			AddServices(services);
		}

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
			app.UseDeveloperExceptionPage();
			app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
			{
				ProjectPath = System.IO.Path.GetFullPath("../../client")
			});

			app.UseStatusCodePagesWithReExecute("/");

			var sharedOptions = new Microsoft.AspNetCore.StaticFiles.Infrastructure.SharedOptions
			{
				FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "wwwroot"))
			};

			app.UseDefaultFiles();

			app.UseStaticFiles(new StaticFileOptions(sharedOptions));

			app.UseMvc();
		}

		private void AddServices(IServiceCollection services)
		{
			//TODO 
		}
	}
}
