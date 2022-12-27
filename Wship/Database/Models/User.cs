using Wship.Database.Models.Common;

namespace Wship.Database.Models
{
    public class User : BaseEntity<Guid>, IAuditable
    {

        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Password { get; set; }
        public string? PhoneNumber { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
