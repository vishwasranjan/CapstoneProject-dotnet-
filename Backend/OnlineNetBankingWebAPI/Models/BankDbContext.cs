using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OnlineNetBankingWebAPI.Models;

public partial class BankDbContext : DbContext
{
    public BankDbContext()
    {
    }

    public BankDbContext(DbContextOptions<BankDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Loan> Loans { get; set; }

    public virtual DbSet<Payee> Payees { get; set; }

    public virtual DbSet<Table> Tables { get; set; }

    public virtual DbSet<Transaction> Transactions { get; set; }

    public virtual DbSet<TransactionCredit> TransactionCredits { get; set; }

    public virtual DbSet<TransactionDebit> TransactionDebits { get; set; }

    public virtual DbSet<TransactionDetail> TransactionDetails { get; set; }

    public virtual DbSet<UserDetail> UserDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=bankDB;Integrated Security=True;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.AccountNo);

            entity.ToTable("Account");

            entity.Property(e => e.AccountNo)
                .HasMaxLength(16)
                .IsUnicode(false);
            entity.Property(e => e.AccountType)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.IfscCode).HasColumnName("IFSC_Code");

            entity.HasOne(d => d.Customer).WithMany(p => p.Accounts)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__Account__Custome__398D8EEE");
        });

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.ToTable("admin");

            entity.Property(e => e.AdminId).ValueGeneratedNever();
            entity.Property(e => e.AdminName)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Loan>(entity =>
        {
            entity.ToTable("loan");

            entity.Property(e => e.LoanId).ValueGeneratedNever();
            entity.Property(e => e.IfscCode).HasColumnName("IFSC_code");
            entity.Property(e => e.LoanType)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Customer).WithMany(p => p.Loans)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__loan__CustomerId__3C69FB99");
        });

        modelBuilder.Entity<Payee>(entity =>
        {
            entity.ToTable("Payee");

            entity.Property(e => e.PayeeId).ValueGeneratedNever();
            entity.Property(e => e.PayeeAccNo)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("Payee_acc_no");
            entity.Property(e => e.PayeeEmail)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Payee_email");
            entity.Property(e => e.SenderAccNo)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("Sender_acc_no");
            entity.Property(e => e.SenderEmail)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Sender_email");

            entity.HasOne(d => d.Sender).WithMany(p => p.Payees)
                .HasForeignKey(d => d.SenderId)
                .HasConstraintName("FK__Payee__SenderId__47DBAE45");
        });

        modelBuilder.Entity<Table>(entity =>
        {
            entity.HasKey(e => e.TransactionId).HasName("PK__Table__9A8C4A3DF2178CF2");

            entity.ToTable("Table");

            entity.Property(e => e.TransactionId)
                .ValueGeneratedNever()
                .HasColumnName("Transaction_id");
            entity.Property(e => e.TransactionAmount).HasColumnName("Transaction_amount");
            entity.Property(e => e.TransactionDate)
                .HasColumnType("datetime")
                .HasColumnName("Transaction_date");
            entity.Property(e => e.TransactionType)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Transaction_type");
        });

        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.TransactionId).HasName("PK__Transact__9A8C4A3DB8FEE167");

            entity.ToTable("Transaction");

            entity.Property(e => e.TransactionId)
                .ValueGeneratedNever()
                .HasColumnName("Transaction_id");
            entity.Property(e => e.TransactionAmount).HasColumnName("Transaction_amount");
            entity.Property(e => e.TransactionTime)
                .HasColumnType("datetime")
                .HasColumnName("Transaction_time");
            entity.Property(e => e.TransactionType)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("transactionType");
        });

        modelBuilder.Entity<TransactionCredit>(entity =>
        {
            entity.HasKey(e => e.Sno);

            entity.ToTable("Transaction_credit");

            entity.Property(e => e.Sno).HasColumnName("sno");
            entity.Property(e => e.SenderAccNo)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("Sender_acc_no");
            entity.Property(e => e.SenderName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Sender_name");
            entity.Property(e => e.TransactionId).HasColumnName("Transaction_id");
            entity.Property(e => e.TransactionTime)
                .HasColumnType("datetime")
                .HasColumnName("Transaction_time");

            entity.HasOne(d => d.Transaction).WithMany(p => p.TransactionCredits)
                .HasForeignKey(d => d.TransactionId)
                .HasConstraintName("FK__Transacti__Trans__4222D4EF");
        });

        modelBuilder.Entity<TransactionDebit>(entity =>
        {
            entity.HasKey(e => e.Sno);

            entity.ToTable("Transaction_debit");

            entity.Property(e => e.Sno).HasColumnName("sno");
            entity.Property(e => e.RecieverAccNo)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("Reciever_acc_no");
            entity.Property(e => e.RecieverName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Reciever_name");
            entity.Property(e => e.TransactionId).HasColumnName("Transaction_id");
            entity.Property(e => e.TransactionTime)
                .HasColumnType("datetime")
                .HasColumnName("Transaction_time");

            entity.HasOne(d => d.Transaction).WithMany(p => p.TransactionDebits)
                .HasForeignKey(d => d.TransactionId)
                .HasConstraintName("FK__Transacti__Trans__440B1D61");
        });

        modelBuilder.Entity<TransactionDetail>(entity =>
        {
            entity.HasKey(e => e.TransactionId).HasName("PK__Transact__9A8C4A3D6EA3A13E");

            entity.Property(e => e.TransactionId)
                .ValueGeneratedNever()
                .HasColumnName("Transaction_id");
            entity.Property(e => e.TransactionAmount).HasColumnName("Transaction_amount");
            entity.Property(e => e.TransactionTime)
                .HasColumnType("datetime")
                .HasColumnName("Transaction_time");
            entity.Property(e => e.TransactionType)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("transactionType");
        });

        modelBuilder.Entity<UserDetail>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PK__UserDeta__A4AE64D88100FC32");

            entity.Property(e => e.CustomerId).ValueGeneratedNever();
            entity.Property(e => e.AlternatePhone)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Country)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.MiddleName)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Phone)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Pin).HasColumnName("PIN");
            entity.Property(e => e.State)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
