using Microsoft.AspNetCore.Mvc;

namespace Wship.Areas.Admin.Controllers
{
    [Area("admin")]
    [Route("home")]
    public class HomeController : Controller
    {
        [HttpGet("~/", Name = "admin-home-index")]
        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
