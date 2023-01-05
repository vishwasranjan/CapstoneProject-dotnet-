using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public class BankDBContext : DbContext
    {
        public BankDBContext(DbContextOptions<BankDBContext> options) : base(options)
        {

        }
        public DbSet<userDetail> userDetails { get; set; }
        public DbSet<account> Account { get; set; }
        public DbSet<payee> Payee { get; set; }
        public DbSet<loan> Loan { get; set; }
        public DbSet<user_login> User_login { get; set; }
        public DbSet<offers> offers { get; set; }
        public DbSet<transactionDetails> transactionDetails { get; set; }
        public DbSet<transaction_credit> transaction_credit { get; set; }

        public DbSet<Cardapply> Cardapply { get; set; }

        public virtual DbSet<admin_login> AdminLogin { get; set; }

    }
}
