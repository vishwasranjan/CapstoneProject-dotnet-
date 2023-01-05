import { Component, OnInit } from  '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BankTransfer } from 'src/app/Models/bank-transfer';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/account';
import { TransactionDetails } from 'src/app/Models/transaction-details';
@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.css']
})
export class BankTransferComponent implements OnInit {
  registerForm?:FormGroup
  user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  errmsg = "";
  account : Account = new Account(0,"","","","",0);
  date : Date = new Date();
  transaction: TransactionDetails = new TransactionDetails(0,"", 0, this.date,0)
  constructor(private userService: UserServiceService, private router: Router)
  {
   this.userService.loadCurrentUser();
   this.user = this.userService.currentUser;
  }

  ngOnInit(): void {
    let bankTransfer = new BankTransfer('','','',0)
    this.registerForm = new FormGroup({
      accountNumber: new FormControl(bankTransfer.accountNumber, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[0-9]{16}$/) 
      ])),
      accountHolderName: new FormControl(bankTransfer.accountHolderName, Validators.required),
      ifsc_payee: new FormControl(bankTransfer.ifsc_payee, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[A-Z]{4}[0-9]{7}$/) 
      ])
      ),
      amount: new FormControl(bankTransfer.amount, Validators.required)

    })
    this.userService.tCredit(200,2).subscribe(data=>console.log(data));
  }
  onClick() : boolean{
    var c=document.getElementById("tc") as HTMLInputElement;
    if (c.checked == true)
    {
      
      return true;
    }
    else
    return false;
  }

  submit(bankTransfer:BankTransfer, ){
    
      // this.c='/username-password'
      //this.router.navigate(["username-password"])
      console.log(bankTransfer);
      console.log(this.user.value.id);
      
      this.userService.tDebit(bankTransfer.amount, this.user.value.id).subscribe(res=>{
        if(res==true)
        {
          this.transaction.customer_id = this.user.value.id;
          this.transaction.transactionType = "Debit";
          this.transaction.transaction_amount = bankTransfer.amount;
          this.userService.addTransaction(this.transaction).subscribe(data=>console.log(data));
      this.userService.getAccount(bankTransfer.accountNumber).subscribe(data=>{
        console.log(data);
      this.userService.tCredit(bankTransfer.amount, data.customerId).subscribe(data=>{console.log(data);
      });
       this.transaction.transactionType = "Credit";
       this.transaction.customer_id = data.customerId;
       this.userService.addTransaction(this.transaction).subscribe(res=>console.log(res));
      });
      console.log(this.account.customerId);
      this.errmsg = "Transaction Successful";
      setTimeout(()=>{this.router.navigate(['dashboard'])}, 3000);
       // this.router.navigate(['dashboard']);
        }
        else
        this.errmsg = "Insufficient balance";
      })
      
}
}
