using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto.Generators;
using System.Security.Claims;
using Wship.Areas.Client.ViewModels.Login;
using Wship.Areas.Client.ViewModels.Register;
using Wship.Contracts.Identity;
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
        public async Task <IActionResult> LoginAsync()
        {
            return View(new LoginViewModel());
        }



        [HttpPost("login", Name = "client-auth-login")]
        public async Task<IActionResult> LoginAsync(LoginViewModel? model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            if (!await CheckPasswordAsync(model!.Email, model!.Password))
            {
                ModelState.AddModelError(String.Empty, "Email or password is not correct");
                return View(model);
            }
            await SignInAsync(model!.Email, model!.Password);

            return RedirectToRoute("admin-home-index");
        }


        public async Task<bool> CheckPasswordAsync(string? email, string? password)
        {

            var model = await _dataContext.Users.FirstAsync(u => u.Email == email);

            if (model is not null && model.Password == password)
            {
                return true;
            }
            return false;
        }

        public async Task SignInAsync(string? email, string? password)
        {

            var user = await _dataContext.Users.FirstAsync(u => u.Email == email);

            await SignInAsync(user.Id);
        }

        public async Task SignInAsync(Guid id)
        {
            var claims = new List<Claim>
            {
                new Claim(CustomClaimNames.ID, id.ToString())
            };
            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var userPrincipal = new ClaimsPrincipal(identity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, userPrincipal);
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
            return RedirectToRoute("client-auth-login");
        }



        //my next works:
        // 1. finish register, and login.
        // 2. separate them new services.
        // 3. add cookie and products.







        #endregion
    }
}
