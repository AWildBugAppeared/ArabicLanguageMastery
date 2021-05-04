using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArabicLanguageMastery.Controllers
{
    [ApiController]
    [Route("[controller]/[action]/{id?}")]
    public class BaseController : ControllerBase
    {
        [HttpGet]
        public ActionResult Test()
        {
            return Ok("This worked!");
        }
    }
}
