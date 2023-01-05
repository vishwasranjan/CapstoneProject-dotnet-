using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class transaction_credit
    {
        public string? Sender_Name { get; set; }

        public string? Sender_Acc_No { get; set; }

        public DateTime? Transaction_time { get; set; }
        [ForeignKey("transactionDetails")]
        public int Transaction_id { get; set; }
        [Key]
        public int sno { get; set; }

        public virtual transactionDetails? TransactionDetails { get; set; }
    }
}
