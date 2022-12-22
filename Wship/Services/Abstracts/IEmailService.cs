using Wship.Contracts.Email;

namespace Wship.Services.Abstracts
{
    public interface IEmailService
    {
        public void Send(MessageDto messageDto);
    }
}
