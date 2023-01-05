import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankTransfer } from '../../Models/bank-transfer';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Account } from 'src/app/Models/account';
import {Payee} from 'src/app/Models/payee';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-add-new-payee',
  templateUrl: './add-new-payee.component.html',
  styleUrls: ['./add-new-payee.component.css']
})
export class AddNewPayeeComponent implements OnInit {
  registerForm?:FormGroup
  account : Account = new Account(0,"", "", "", "", 0);
  id = 0;
  pEmail? = "";
  payee : Payee = new Payee(0, 0, "", "", "","");
  accountS : Account =  new Account(0,"", "", "", "", 0);
  sender: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  senderId : number = 0;
  constructor(private userService: UserServiceService) {
    this.userService.loadCurrentUser();
    this.sender= this.userService.currentUser;
    console.log("senderId");
    console.log(this.sender.value.id);
    this.userService.getAccountById(this.senderId).subscribe(data=>this.accountS = data);
    console.log(this.accountS);
  }

  ngOnInit(): void {
    let banktransfer=new BankTransfer('','','',0);
    this.registerForm=new FormGroup({
      accountHolderName: new FormControl(banktransfer.accountHolderName, Validators.required),
      accountNumber: new FormControl(banktransfer.accountNumber, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[0-9]{16}$/) 
      ]))
      
    })
  
  }
  acc = "";
  submit(banktransfer:BankTransfer){
    //console.log(banktransfer);
    //this.acc = this.accountS.accountNo;
    alert("Payee added");
    //console.log(banktransfer.accountNumber);
    this.userService.getUserById(1).subscribe(res=>console.log(res));
    this.userService.getAccount(banktransfer.accountNumber).subscribe(data=>{
      
      console.log(data.accountBalance);
      this.account = data;
      console.log(this.account);
      console.log(data.customerId);
      this.id = data.customerId;
      this.payee.payee_acc_no  =data.accountNo;
      this.payee.payeeId = data.customerId;
      this.payee.sender_email = this.userService.currentUser.value.email;
      this.payee.senderId = <number>this.userService.currentUser.value.id;
      this.payee.sender_acc_no = "";
      this.userService.getAccountById(<number>this.senderId).subscribe(data=>this.accountS = data);
      console.log("sender acc no");
      
      this.display();
      console.log("payee");
      console.log(this.payee);
      this.userService.addPayee(this.payee).subscribe(data=>console.log("Payee has been added"));
    });
    //  this.userService.getUserById(1).subscribe(data=>{console.log(data);
    // console.log(this.id);
    // });
  }

  display(){
    console.log(this.account.accountBalance);
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(data=>{console.log(data);
      this.pEmail = data.email;
      this.payee.payee_email = data.email;
    });
    
  }
}
