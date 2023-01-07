using Microsoft.AspNetCore.Mvc;
using OnlineNetBankingWebAPI.Models;
using BankDBFirstLib;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System;

namespace OnlineNetBankingWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IDatabase _dal;
        private readonly IConfiguration _configuration;
        public UserController(IDatabase dal, IConfiguration configuration)
        {
            _dal = dal;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("getallUsers")]
        public IEnumerable<userDetail> GetAllUser()
        {
            //Get all the users
            //using (var context = new BankDbContext())
            //{
            //    return context.UserDetails.ToList();
            //}
           return _dal.GetAllUsers();

        }



        [HttpGet]
        [Route("GetEmpById/{id}")]
        public userDetail GetUserById(int id)
        {


            //using (var context = new BankDbContext())
            //{
            //    return context.UserDetails.Where(u => u.CustomerId == id).ToList();

            //}
            return _dal.GetUser(id);
        }
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(userDetail user)
        {
            _dal.AddUser(user);
            return Ok(user);
        }

        [AllowAnonymous]       //because authentication is not required for before sign up
        [HttpPost]
        [Route("registerUser")]
        public IActionResult RegisterUser(user_login user)
        {
            if (user == null)
                return BadRequest();
            _dal.AddUserLogin(user);
            return Ok(new
            {
                Message = "Registered!"
            });

        }
        [AllowAnonymous]  //authentication will be done after login
        [HttpPost]
        [Route("login")]                                                             // public int Login(string username , string password)
        public IActionResult Login(string username, string password)
        {
            int id;
                id=_dal.login(username, password);
            //if (id>0)
            //{
            //    return Ok(new
            //    {
            //        Message = "Login Success!"
            //    });

            //}
            //else
            //{
            //    return NotFound(new { Message = "User not found." });
            //}
            // return id;
            if (id > 0)
            {
                var user = _dal.GetUser(id);
                String customerId = id.ToString(); 
                return Ok(new JwtService(_configuration).GenerateToken(customerId, user.FirstName, user.LastName, user.Email, username));
             }
            else
            {
                return Ok("Failure");
            }
        }

        [HttpGet]
        [Route("getPayeeByacc")]
        public userDetail GetPayeeByacc(string acc)
        {
            return _dal.getPayeeByAcc(acc);
        }
        [HttpPost]
        [Route("AddPayee")]
        public IActionResult AddPayee(payee payee)
        {
            _dal.AddPayee(payee);
            return Ok(payee);

        }

        [HttpGet]
        [Route("getUserByAcc")]
        public userDetail getUserByAccount(string acc)
        {
            return _dal.getUserByAcc(acc);
        }
        [HttpGet]
        [Route("getUserByEmail")]
        public userDetail GetUserByEmail(string email)
        {
            return _dal.GetUserByEmail(email);
        }
        [HttpGet]
        [Route("getAccount")]
        public account GetAccount(string acc)
        {
            return _dal.GetAccount(acc);
        }
        [HttpGet]
        [Route("getAccountById")]
        public account GetAccount(int id)
        {
            return _dal.GetAccountById(id);
        }

        [HttpGet]
        [Route("getAllPayess")]
        public List<payee> GetAllPayees(int sender)
        {
            return _dal.getAllPayee(sender);
        }

        [HttpGet]
        [Route("transaction_credit")]
        public IActionResult TransactionCredit(double amount, int customer_id)
        {
            _dal.Tcredit(amount, customer_id);
            return Ok(new
            {
                Message = "Success"
            }) ; 
        }

        [HttpGet]
        [Route("transaction_debit")]
        public bool TransactionDebit(double amount, int customer_id)
        {
           return _dal.Tdebit(amount, customer_id);
            
        }

        [HttpGet]
        [Route("GetAllTransactions")]
        public List<transactionDetails> GetAllTransactions()
        {
            return _dal.GetTransactionDetails();
        }

        [HttpPost]
        [Route("AddTransaction")]
        public IActionResult AddTransaction(transactionDetails transaction)
        {
            _dal.AddTransaction(transaction);
            return Ok(new
            {
                Message = "Transaction added in transaction table"
            });
        }

        [HttpPost]
        [Route("AddCard")]
         public IActionResult AddCard(Cardapply cardapply)
        {
            _dal.AddCard(cardapply);
            return Ok(new
            {
                Message = "Added "
            });
        }

        [HttpGet]
        [Route("GetUserTransactions")]
        public List<transactionDetails> GetUserTransactions(int id)
        {
            return _dal.GetUserTransactions(id);
        }

        [HttpPost]
        [Route("AddLoan")]
        public IActionResult AddLoan(loan loan)
        {
            _dal.AddLoan(loan);
            return Ok(new
            {
                Message = "Loan Added"
            });
        }

        [HttpGet]
        [Route("GetCardApplyDetails")]
        public IEnumerable<Cardapply> ShowCardApply()
        {
            return _dal.ShowCardApply();
        }

        [HttpGet]
        [Route("AdminLogin")]
        public bool AdminLogin(int id, string password)
        {
            return _dal.AdminLogin(id, password);
        }

        //[HttpGet]
        //[Route("checkAcc")]
        //public bool ChkAcc(int custId)
        //{
        //    return _dal.checkAcc(custId);
        //}




        [HttpPost]
        [Route("LoginByToken")]
        public IActionResult LoginByToken(int id, string password)
        {
            var admin = _dal.GetAdminById(id);
            if (id == admin.Admin_id && password == admin.Admin_password)
            {
                //return OK with token
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"));

                var token = new JwtSecurityToken(
                issuer: "cosmopolitian",
                audience: "cosmopolitian",
                expires: DateTime.Now.AddHours(3),
                                   //claims: new List<Claim> { new Claim("t1", "v1"), new Claim("t2", "v2") },
                                   signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );


                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });


            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("AddOffer")]
        public void AddOffer(offers offers)
        {
            _dal.AddOffer(offers);
        }

        [HttpGet]
        [Route("ActiveOffers")]
        public List<offers> ActiveOffers()
        {
            return _dal.ActiveOffers();
        }

        [HttpDelete]
        [Route("DeleteOffersbyID")]
        public void DeleteOffers(int offerid)
        {
            _dal.DeleteOffers(offerid);
        }



        [HttpGet]
        [Route("GetLoanDeatils")]
        public IEnumerable<loan> GetLoanDeatils()
        {
            return _dal.GetLoanDetails();

        }

        [HttpGet]
        [Route("LoanStatus")]
        public Boolean GetLoanStatus(int loanID)
        {
            return _dal.GetLoanStatus(loanID);
        }
        [HttpPut]
        [Route("ApproveLoan")]
        public void ApproveLoan(int lid)
        {
            _dal.ApproveLoan(lid);
        }

        [HttpPut]
        [Route("RejectLoan")]
        public void RejectLoan(int lid)
        {
            _dal.RejectLoan(lid);
        }

        [HttpDelete]
        [Route("DeleteLoan")]
        public void DeleteLoanDetails(int lid)
        {
            _dal.DeleteLoanDetails(lid);
        }

        [HttpGet]
        [Route("GetAllApprovedLoans")]
        public List<loan> ApprovedLoans()
        {
            return _dal.ApprovedLoans();
        }

        [HttpGet]
        [Route("CheckExistingUser")]
        public int CheckExistingUser(int custid)
        {
            return _dal.CheckExistingUser(custid);
        }


        [HttpPost]
        [Route("AddUserCredentials")]
        public void AddUserCredentials(user_login user_Login)
        {
            _dal.AddUserLogin(user_Login);
        }



        [HttpPost]
        [Route("AdminLoginByToken")]
        public IActionResult AdminLoginByToken(int id, string password)
        {
            var admin = _dal.GetAdminById(id);
            if (id == admin.Admin_id && password == admin.Admin_password)
            {
                //return OK with token
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"));

                var token = new JwtSecurityToken(
                issuer: "cosmopolitian",
                audience: "cosmopolitian",
                expires: DateTime.Now.AddHours(3),
                                   //claims: new List<Claim> { new Claim("t1", "v1"), new Claim("t2", "v2") },
                                   signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );


                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });


            }
            return Unauthorized();
        }



    }

    


}