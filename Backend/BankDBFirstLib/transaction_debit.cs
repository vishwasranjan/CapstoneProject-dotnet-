using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class transaction_debit
    {
        public string? RecieverName { get; set; }

        public string? RecieverAccNo { get; set; }

        public DateTime? TransactionTime { get; set; }
        [ForeignKey("transactionDetails")]
        public int? TransactionId { get; set; }
        [Key]
        public int Sno { get; set; }

        public virtual transactionDetails? Transaction { get; set; }
    }
}
