import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Payee } from 'src/app/Models/payee';
import { User } from 'src/app/Models/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-existing-payees',
  templateUrl: './existing-payees.component.html',
  styleUrls: ['./existing-payees.component.css']
})
export class ExistingPayeesComponent implements OnInit {
  sender: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  payees: Payee[] = [];
  //names: string[] = [];
  u : User[] = [];
  constructor(private userService: UserServiceService, private router: Router) {
    this.userService.loadCurrentUser();
    this.sender = this.userService.currentUser;
    console.log("existing-payees: sender-id");
    console.log(this.sender.value.id);
   }

  ngOnInit(): void {
   this.userService.getAllPayees(this.sender.value.id).subscribe(data=>{
    this.payees=data;
    console.log(this.payees)
    this.payees.map(d=>{
      this.userService.getUserById(d.payeeId).subscribe(res=>this.u.push(res));
      //console.log(this.names);
      console.log(this.u);
    })
  })
  }

  transfer(id : number, name: string, payee_acc_no : string){
    console.log("tranfered");
    console.log(id);
    this.userService.payeeId = id;
    this.userService.payeeName = name;
    this.userService.payeeAccNo = payee_acc_no;
    this.router.navigate(['transfer-to-payee']);
    
  }

}


