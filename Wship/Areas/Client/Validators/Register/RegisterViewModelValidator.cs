using FluentValidation;
using Wship.Areas.Client.ViewModels.Register;

namespace Wship.Areas.Client.Validators.Register
{
    public class RegisterViewModelValidator : AbstractValidator<RegisterViewModel>
    {
        public RegisterViewModelValidator()
        {
            RuleFor(avm => avm.FirstName)
                .NotEmpty().WithMessage("Firstname can't be empty")
                .MinimumLength(3).WithMessage("Minimum length should be 3");

            RuleFor(avm => avm.LastName)
                .NotEmpty().WithMessage("Lastname can't be empty")
                .MinimumLength(3).WithMessage("Minimum length should be 3");


            RuleFor(avm => avm.Email)
                .NotEmpty().WithMessage("Email can't be empty")
                .EmailAddress();

        }
    }
}

