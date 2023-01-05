using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class TransactionCredit
{
    public string? SenderName { get; set; }

    public string? SenderAccNo { get; set; }

    public DateTime? TransactionTime { get; set; }

    public int? TransactionId { get; set; }

    public int Sno { get; set; }

    public virtual TransactionDetail? Transaction { get; set; }
}
