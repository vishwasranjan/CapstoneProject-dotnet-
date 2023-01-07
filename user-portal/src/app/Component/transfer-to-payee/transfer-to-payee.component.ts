import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';
import { TransactionDetails } from 'src/app/Models/transaction-details';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-transfer-to-payee',
  templateUrl: './transfer-to-payee.component.html',
  styleUrls: ['./transfer-to-payee.component.css']
})
export class TransferToPayeeComponent implements OnInit {
amount = 0;
date = new Date();
user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
transaction : TransactionDetails = new TransactionDetails(0,"Debit",0,this.date,0);
errmsg = "";
  constructor(private userService: UserServiceService, private router: Router) { 
    this.userService.loadCurrentUser();
    this.user = this.userService.currentUser;
  }
name = this.userService.payeeName;
accountNumber : string = "";
  ngOnInit(): void {
    console.log(this.userService.payeeId);
  }

  transfer(){
    console.log(this.amount);
    this.userService.tDebit(this.amount, this.user.value.id).subscribe(res=>{
      if(res==true)
      {
        this.transaction.customer_id = this.user.value.id;
        this.transaction.transactionType = "Debit";
        this.transaction.transaction_amount = this.amount;
        this.userService.addTransaction(this.transaction).subscribe(data=>console.log(data));
    this.userService.getAccount(this.accountNumber).subscribe(data=>{
      console.log(data);
    this.userService.tCredit(this.amount, data.customerId).subscribe(data=>{console.log(data);
    });
     this.transaction.transactionType = "Credit";
     this.transaction.customer_id = data.customerId;
     this.userService.addTransaction(this.transaction).subscribe(res=>console.log(res));
    });
    console.log(this.userService.payeeId);
    this.errmsg = "Transaction Successful";
    setTimeout(()=>{this.router.navigate(['dashboard'])}, 3000);
     // this.router.navigate(['dashboard']);
      }
      else
      this.errmsg = "Insufficient balance";
    })
  }
}
