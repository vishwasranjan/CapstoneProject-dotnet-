using System;
using System.Collections.Generic;

namespace OnlineNetBankingWebAPI.Models;

public partial class Payee
{
    public int PayeeId { get; set; }

    public int? SenderId { get; set; }

    public string? PayeeEmail { get; set; }

    public string? SenderEmail { get; set; }

    public string? PayeeAccNo { get; set; }

    public string? SenderAccNo { get; set; }

    public virtual UserDetail? Sender { get; set; }
}
