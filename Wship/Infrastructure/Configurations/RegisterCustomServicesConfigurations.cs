

using Microsoft.EntityFrameworkCore;
using Wship.Services.Abstracts;
using Wship.Services.Concretes;

namespace Wship.Infrastructure.Configurations
{
    public static class RegisterCustomServicesConfigurations
    {
        public static void RegisterCustomServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IEmailService, SMTPService>();
            services.AddScoped<IUserService, UserService>();

        }
    }
}
