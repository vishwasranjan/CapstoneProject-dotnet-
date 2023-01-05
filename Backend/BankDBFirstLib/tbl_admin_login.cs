using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class admin_login
    {
        [Key]
        public int Admin_id { get; set; }
        public string? Admin_password { get; set; }
    }
}
