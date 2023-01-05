using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Wship.Areas.Client.Controllers
{
    [Area("client")]
    [Route("my")]
    [Authorize]
    public class MyCabinetController : Controller
    {
        [HttpGet("cabinet")]
        public IActionResult Cabinet()
        {
            return View();
        }
    }
}
