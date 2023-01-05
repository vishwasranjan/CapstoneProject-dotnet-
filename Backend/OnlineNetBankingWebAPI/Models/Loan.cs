using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class Loan
{
    public int LoanId { get; set; }

    public string? LoanType { get; set; }

    public int? IfscCode { get; set; }

    public double? Amount { get; set; }

    public int? CustomerId { get; set; }

    public virtual UserDetail? Customer { get; set; }
}
