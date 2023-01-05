import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { TransactionDetails } from 'src/app/Models/transaction-details';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  d : Date = new Date();
  allTransactions : TransactionDetails[] = [];
  user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private userService: UserServiceService) { 
    this.userService.loadCurrentUser();
    this.user = this.userService.currentUser;
    console.log(this.user.value.id)
  }
  transactionDetails : TransactionDetails = new TransactionDetails(0,"Debit",400, this.d, 0);

  ngOnInit(): void { 
//this.userService.getAllTransactions().subscribe(data=>this.allTransactions = data);
this.transactionDetails.customer_id = this.user.value.id;
//this.userService.addTransaction(this.transactionDetails).subscribe(data => console.log(data));
this.userService.getUserTransactions(this.user.value.id).subscribe(data=>{this.allTransactions = data;
console.log(this.allTransactions)
});
  }

}
