using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace BankDBFirstLib
{
    public class offers
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Descript { get; set; }
        public string Picture { get; set; }
    }
}
