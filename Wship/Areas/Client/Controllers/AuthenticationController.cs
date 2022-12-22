using Microsoft.AspNetCore.Mvc;

namespace Wship.Areas.Client.Controllers
{
    [Area("client")]
    [Route("auth")]
    public class AuthenticationController : Controller
    {
        [HttpGet("login", Name = "client-auth-login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpGet("register", Name = "client-auth-register")]
        public IActionResult Register()
        {
            return View();
        }
        //public IActionResult Login()
        //{
        //    return View();
        //}
        //public IActionResult Login()
        //{
        //    return View();
        //}
    }
}
