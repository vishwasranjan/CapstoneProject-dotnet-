using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class transactionDetails
    {
        [Key]
        public int Transaction_id { get; set; }

        public string? TransactionType { get; set; }

        public double? Transaction_amount { get; set; }

        public DateTime? Transaction_time { get; set; }
        public int Customer_id { get; set; }

        public virtual ICollection<transaction_credit> Transaction_credit { get; } = new List<transaction_credit>();

        public virtual ICollection<transaction_debit> TransactionDebits { get; } = new List<transaction_debit>();

    }
}
