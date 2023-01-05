using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class UserDetail
{
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

    public virtual ICollection<Account> Accounts { get; } = new List<Account>();

    public virtual ICollection<Loan> Loans { get; } = new List<Loan>();

    public virtual ICollection<Payee> Payees { get; } = new List<Payee>();
}
