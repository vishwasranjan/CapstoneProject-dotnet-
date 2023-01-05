using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankDBFirstLib
{
    public class user_login
    {
        [ForeignKey("UserDetail")]
        public int CustomerId { get; set; }
        [Key]
        public string UserName { get; set; }
        public string pswd { get; set; }


        public virtual userDetail? UserDetail { get; set; }
    }
}
