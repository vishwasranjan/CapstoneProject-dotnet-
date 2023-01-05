using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class Cardapply
    {
        [Key]
        public int Customer_id { get; set; } 
        public string Email { get; set; }
       public string CardType { get; set; }
        public int CardStatus { get; set; }
    }
}
