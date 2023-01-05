
using System.ComponentModel.DataAnnotations;

namespace BankDBFirstLib
{
    public class userDetail
    {
        [Key]
        public int CustomerId { get; set; }

        public string? FirstName { get; set; }

        public string? MiddleName { get; set; }

        public string? LastName { get; set; }

        public string? Phone { get; set; }

        public string? AlternatePhone { get; set; }

        public string? Email { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }

        public string? Country { get; set; }

        public int? Pin { get; set; }

        public string? Gender { get; set; }

        public virtual ICollection<account> Accounts { get; set; } = new List<account>();

        public virtual ICollection<loan> Loans { get; set; } = new List<loan>();

        public virtual ICollection<payee> Payees { get; set; } = new List<payee>();


        public virtual user_login User_login { get; set; } = new user_login();
    }
}