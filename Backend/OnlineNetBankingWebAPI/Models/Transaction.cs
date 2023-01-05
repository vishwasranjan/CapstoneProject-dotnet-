using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class Transaction
{
    public int TransactionId { get; set; }

    public string? TransactionType { get; set; }

    public double? TransactionAmount { get; set; }

    public DateTime? TransactionTime { get; set; }
}
