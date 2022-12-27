using Microsoft.AspNetCore.Mvc;
using Wship.Areas.Client.ViewModels.Register;
using Wship.Database;
using Wship.Database.Models;

namespace Wship.Areas.Client.Controllers
{
    [Area("client")]
    [Route("auth")]
    public class AuthenticationController : Controller
    {
        public readonly DataContext _dataContext;

        public AuthenticationController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        #region Login
        [HttpGet("login", Name = "client-auth-login")]
        public IActionResult Login()
        {
            return View();
        }
        #endregion


        #region Register
        [HttpGet("register", Name = "client-auth-register")]
        public ViewResult Register()
        {

            return View(new RegisterViewModel());
        }

        [HttpPost("register", Name = "client-auth-register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }


            var user = new Database.Models.User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password,
                PhoneNumber = model.PhoneNumber,
                CreatedAt = DateTime.Now
            };
            _dataContext.Users.Add(user);
            await _dataContext.SaveChangesAsync();
            return RedirectToAction("client-auth-login");
        }










        #endregion
    }
}
