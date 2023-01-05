using Microsoft.EntityFrameworkCore.Migrations.Operations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankDBFirstLib
{
    public interface IDatabase
    {
        //operations for userDetail table
        void AddUser(userDetail user);    //from admin end
        void UpdateUser(userDetail user);
        userDetail GetUser(int id);

        userDetail GetUserByEmail(string email);
        List<userDetail> GetAllUsers();

        userDetail getUserByAcc(string acc);
        
        //operations for user_login table
        void AddUserLogin(user_login userLogin);        //from user end
        int login(string username, string password);   

        //operations for payee table
        void AddPayee(payee payee);
        void DeletePayee(int id);
        payee getPayee(int id);  //get payee with respect to sender i.e user

        userDetail getPayeeByAcc(string acc);    //returs customer which will be added as a payee for another user , in other words returs user by account number
        List<payee> getAllPayee(int sender);

        //operations for transactions
        void Tcredit(double amount, int customer_id);  //transaction and transaction_credit tables are involved
        bool Tdebit(double amount, int customer_id);   //transaction and transaction_debit tables are involved
        //operations for offers
        void AddOffer(offers offer);
        offers getOffer(int id);
        void UpdateOffer(offers offer);
        void DeleteOffer(int id);
        //operations for loans
        void AddLoan(loan loan);


        //operations for account table
        int getIdacc(string account);
        account GetAccount(string account);

        account GetAccountById(int id);

        //operations for transaction table

        List<transactionDetails> GetTransactionDetails();
        void AddTransaction(transactionDetails transactionDetails);

       void AddCard(Cardapply card);
        List<transactionDetails> GetUserTransactions(int id);
        bool AdminLogin(int id, string password);
        admin_login GetAdminById(int id);
        List<loan> GetLoanDetails();
        Boolean GetLoanStatus(int lid);
        void ApproveLoan(int lid);
        void RejectLoan(int lid);
        void DeleteLoanDetails(int lid);
        List<loan> ApprovedLoans();
        List<offers> ActiveOffers();
        void DeleteOffers(int offerid);
        List<Cardapply> ShowCardApply();
        








    }
}
