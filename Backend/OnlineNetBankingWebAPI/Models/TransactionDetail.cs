using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class TransactionDetail
{
    public int TransactionId { get; set; }

    public string? TransactionType { get; set; }

    public double? TransactionAmount { get; set; }

    public DateTime? TransactionTime { get; set; }

    public virtual ICollection<TransactionCredit> TransactionCredits { get; } = new List<TransactionCredit>();

    public virtual ICollection<TransactionDebit> TransactionDebits { get; } = new List<TransactionDebit>();
}
