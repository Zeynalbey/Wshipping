using System.ComponentModel.DataAnnotations;


namespace Wship.Areas.Client.ViewModels.Register
{
    public class RegisterViewModel
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password can't be empty")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Password can't be empty")]
        [Compare(nameof(Password), ErrorMessage = "Password and confirm password is not same")]
        public string? ConfirmPassword { get; set; }

        [Required(ErrorMessage = "Phone number can't be empty.")]
        [RegularExpression(@"^\+[1-9]{1}[0-9]{7,10}$", ErrorMessage = "Please enter a valid phone number")]
        public string? PhoneNumber { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
