using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class TransactionDebit
{
    public string? RecieverName { get; set; }

    public string? RecieverAccNo { get; set; }

    public DateTime? TransactionTime { get; set; }

    public int? TransactionId { get; set; }

    public int Sno { get; set; }

    public virtual TransactionDetail? Transaction { get; set; }
}
