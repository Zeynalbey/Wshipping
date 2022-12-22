
using Wship.Database.Models;

namespace Wship.Services.Abstracts
{
    public interface IUserService
    {
        public bool IsAuthenticated { get; }
        public User CurrentUser { get; }

        Task<bool> CheckPasswordAsync(string? email, string? password);
        string GetCurrentUserFullName();
        Task SignInAsync(Guid id);
        Task SignInAsync(string? email, string? password);
        //Task CreateAsync(RegisterViewModel model);
        Task SignOutAsync();

    }
}
