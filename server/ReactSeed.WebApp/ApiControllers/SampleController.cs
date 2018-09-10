using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace ReactSeed.WebApp.ApiControllers
{
    [Route("api/Sample/")]
    public class SampleController : Controller
    {

		public SampleController()
		{
		}

		[HttpGet]
		public ExampleDto Get()
		{
			var model = new ExampleDto() { Text = "Hi, this is a http get .net core response." };
			return model;
		}
	}

	public class ExampleDto
	{
		public string Text { get; set; }
	}
}
