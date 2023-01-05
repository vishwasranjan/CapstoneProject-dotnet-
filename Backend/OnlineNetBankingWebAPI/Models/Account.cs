using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class Account
{
    public int? CustomerId { get; set; }

    public string AccountNo { get; set; } = null!;

    public int? IfscCode { get; set; }

    public string? AccountType { get; set; }

    public double? AccountBalance { get; set; }

    public virtual UserDetail? Customer { get; set; }
}
