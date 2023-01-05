using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace BankDBFirstLib
{
    public class account
    {
        public int? CustomerId { get; set; }
        [Key]
        public string AccountNo { get; set; } = null!;

        public string IFSC_Code { get; set; }

        public string? AccountType { get; set; }

        public double? AccountBalance { get; set; }

        public string? Branch { get; set; }
        public virtual userDetail? Customer { get; set; }
    }
}
