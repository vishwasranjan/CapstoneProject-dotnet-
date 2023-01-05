using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace BankDBFirstLib
{
    public class DataAccessLayer : IDatabase
    {
        private readonly BankDBContext dbCtx;
        //dependency injection
        public DataAccessLayer(BankDBContext dbCtx)
        {
            this.dbCtx = dbCtx;
        }

        public void AddLoan(loan loan)
        {
           dbCtx.Add(loan);
            dbCtx.SaveChanges();
        }

        public void AddOffer(offers offer)
        {
            dbCtx.Add(offer);
            dbCtx.SaveChanges();
        }

        public void AddPayee(payee payee)
        {
            dbCtx.Add(payee);
            dbCtx.SaveChanges();
        }

        public void AddUser(userDetail user)  //will execute while creating new user on admin panel when customer requests for netbanking.
        {
            dbCtx.Add(user);
            dbCtx.SaveChanges();
        }

        public void AddUserLogin(user_login userLogin)   //will execute while registering new user on user side
        {
            dbCtx.Add(userLogin);
            dbCtx.SaveChanges();
        }

        public void DeleteOffer(int id)
        {
            var offer = dbCtx.offers.Where(o=>o.Id== id).SingleOrDefault();
            dbCtx.offers.Remove(offer);
            dbCtx.SaveChanges();
        }

        public void DeletePayee(int id)
        {
            var payee = dbCtx.Payee.Where(o=>o.PayeeId== id).SingleOrDefault();
            dbCtx.Payee.Remove(payee);
            dbCtx.SaveChanges();
        }

        public List<payee> getAllPayee(int sender)
        {
            var payees = dbCtx.Payee.Where(o => o.SenderId == sender).ToList();
            return payees;
        }

        public List<userDetail> GetAllUsers()
        {
            //List<userDetail> users = new List<userDetail>();
            var users= dbCtx.userDetails.ToList();
            return users;
        }

        public userDetail getUserByAcc(string acc)
        {
            var account  = dbCtx.Account.Where(o=>o.AccountNo== acc).SingleOrDefault();
            int? id = 0;
             id = account.CustomerId;
            return GetUser((int)id);
        }

        public offers getOffer(int id)
        {
            var offer = dbCtx.offers.Where(o => o.Id == id).FirstOrDefault();
            return offer;

        }

        public payee getPayee(int id)
        {
            return dbCtx.Payee.FirstOrDefault(o => o.PayeeId == id);
        }

        public userDetail getPayeeByAcc(string acc)
        {
            var account = dbCtx.Account.FirstOrDefault(o => o.AccountNo == acc);
            int? id = account.CustomerId;
            return dbCtx.userDetails.FirstOrDefault(o => o.CustomerId == id);
        }

        public userDetail GetUser(int id)
        {
            return dbCtx.userDetails.FirstOrDefault(u => u.CustomerId == id); 
        }

        public int login(string username, string password)
        {
            
            var user = dbCtx.User_login.FirstOrDefault(x => x.UserName == username && x.pswd == password);
            if (user != null)
                return user.CustomerId;
            else
                return 0;
        }

        

        public void Tcredit(double amount, int customer_id)
        {
            var user = dbCtx.Account.Where(o => o.CustomerId == customer_id).SingleOrDefault();
            user.AccountBalance = user.AccountBalance + amount;
            dbCtx.SaveChanges();
            
             
        }

       

        public bool Tdebit(double amount, int customer_id)
        {
            var user = dbCtx.Account.Where(o => o.CustomerId == customer_id).SingleOrDefault();

            if(user.AccountBalance > amount)
            {
                user.AccountBalance = user.AccountBalance - amount;
                dbCtx.SaveChanges();
                return true;
            }
            else
                return false;
        }

        public void UpdateOffer(offers offer)
        {
            throw new NotImplementedException();
        }

        public void UpdateUser(userDetail user)
        {
            throw new NotImplementedException();
        }

        public userDetail GetUserByEmail(string email)
        {
            return dbCtx.userDetails.Where(o => o.Email == email).FirstOrDefault();
        }

        public int getId(string account)
        {
            throw new NotImplementedException();
        }

        public int getIdacc(string account)
        {
            int? id = dbCtx.Account.Where(o => o.AccountNo == account).FirstOrDefault().CustomerId;
            id = (int)id;
            return (int)id;
        }

        public account GetAccount(string account)
        {
            return dbCtx.Account.FirstOrDefault(o => o.AccountNo == account);
        }

        public account GetAccountById(int id)
        {
            return dbCtx.Account.FirstOrDefault(o => o.CustomerId == id);
        }

        public List<transactionDetails> GetTransactionDetails()
        {
           return dbCtx.transactionDetails.ToList();
        }

        public void AddTransaction(transactionDetails transactionDetails)
        {
           dbCtx.Add(transactionDetails);
            dbCtx.SaveChanges();
        }

        public void AddCard(Cardapply card)
        {
            dbCtx.Add(card);
            dbCtx.SaveChanges();
        }

        public List<transactionDetails> GetUserTransactions(int id)
        {
            return dbCtx.transactionDetails.Where(o => o.Customer_id == id).ToList();
        }

        public bool AdminLogin(int id, string password)
        {
            var admin = dbCtx.AdminLogin.Where(o => (o.Admin_id == id && o.Admin_password == password)).FirstOrDefault();
            if (admin != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public admin_login GetAdminById(int id)
        {
            var admin = dbCtx.AdminLogin.Where(o => o.Admin_id == id).SingleOrDefault();
            if (admin != null)
            {
                return admin;
            }
            else
            {
                return null;
            }
        }

        public List<loan> GetLoanDetails()
        {
            var loanDeatils = dbCtx.Loan.Where(o => (o.LoanStatus == "0")).ToList();
            return loanDeatils;
        }

        public bool GetLoanStatus(int lid)
        {
            var status = dbCtx.Loan.Where(o => (o.LoanId == lid)).SingleOrDefault();
            if (status.LoanStatus == "0")
            {
                return false;
            }
            else if (status.LoanStatus == "1")
            {
                return true;
            }
            else
            {
                return false;
            }





        }

        public void ApproveLoan(int lid)
        {
            var status = dbCtx.Loan.Where(o => (o.LoanId == lid)).SingleOrDefault();
            if (status != null)
            {
                status.LoanStatus = "1";
                dbCtx.SaveChanges();
            }
        }

        public void RejectLoan(int lid)
        {
            var status = dbCtx.Loan.Where(o => (o.LoanId == lid)).SingleOrDefault();
            if (status != null)
            {
                status.LoanStatus = "0";
                dbCtx.SaveChanges();
            }
        }

        public void DeleteLoanDetails(int lid)
        {
            var status = dbCtx.Loan.Where(o => (o.LoanId == lid)).SingleOrDefault();
            if (status != null)
            {
                dbCtx.Loan.Remove(status);
                dbCtx.SaveChanges();
            }
        }

        public List<loan> ApprovedLoans()
        {
            var approvedloans = dbCtx.Loan.Where(o => (o.LoanStatus == "1")).ToList();
            return approvedloans;
        }

        public List<offers> ActiveOffers()
        {
            var activeoffers = dbCtx.offers.ToList();
            return activeoffers;
        }

        public void DeleteOffers(int offerid)
        {
            var status = dbCtx.offers.Where(o => (o.Id == offerid)).SingleOrDefault();
            if (status != null)
            {
                dbCtx.offers.Remove(status);
                dbCtx.SaveChanges();
            }
        }

        public List<Cardapply> ShowCardApply()
        {
            var lstUser = dbCtx.Cardapply.ToList();
            return lstUser;
        }
    }
}
