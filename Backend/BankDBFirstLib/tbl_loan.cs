using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BankDBFirstLib
{
    public class loan
    {
        [Key]
        public int LoanId { get; set; }

        public string? LoanType { get; set; }

        public int NoOfYears{ get; set; }

        public double? Amount { get; set; }

        public int? CustomerId { get; set; }

        public string? LoanStatus { get; set; }

        public string? ITdocument1 { get; set; }
        public string ? ITdocument2 { get; set; }
        public string BSdocument { get; set; }

        public virtual userDetail? Customer { get; set; }
    }
}
