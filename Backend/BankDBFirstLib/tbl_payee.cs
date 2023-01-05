using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace BankDBFirstLib
{
    public class payee
    {
        [Key]
        public int PayeeId { get; set; }

        public int? SenderId { get; set; }

        public string? Payee_email { get; set; }

        public string? Sender_email { get; set; }

        public string? Payee_acc_no { get; set; }

        public string? Sender_acc_no { get; set; }

        public virtual userDetail? Sender { get; set; }
    }
}
