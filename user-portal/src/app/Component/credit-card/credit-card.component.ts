import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user'
import { Account } from '../../Models/account'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cardapply } from 'src/app/Models/cardapply';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit{
  registerForm?:FormGroup
   user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
   cardapply : Cardapply =  new Cardapply(0,"", "Credit", 0);
   msg = "";
  constructor(private userService: UserServiceService, private router: Router){
    this.userService.loadCurrentUser();
    this.user = this.userService.currentUser;
  }

  ngOnInit(): void {
    let user =new User(0,'','','','','','','','','','','','')
    let account =new Account (0,'','','','',0)
    this.registerForm=new FormGroup({
      firstname: new FormControl(user.firstName, 
        Validators.compose([
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(20)
        ])
        ),
        middlename: new FormControl(user.middleName, 
          Validators.compose([
            Validators.required, 
            Validators.minLength(5), 
            Validators.maxLength(20)
          ])
          ),
        lastname: new FormControl(user.lastName, 
            Validators.compose([
              Validators.required, 
              Validators.minLength(5), 
              Validators.maxLength(20)
            ])
            ),
      accountnum: new FormControl(account.accountNo, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[0-9]{16}$/) 
      ])
      ),
      phonenumber: new FormControl(user.phone, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[6-9]{1}[0-9]{9}$/)
      ])
      ),
      ifsc_code: new FormControl(account.ifsC_Code, Validators.compose([
        Validators.required,  
        Validators.pattern(/^[A-Z]{4}[0-9]{7}$/) 
      ])
      ),
      branch: new FormControl(account.branch, Validators.compose([
        Validators.required
      ])),
     // occupation: new FormControl(user.occupation, Validators.compose([
       // Validators.required
      //])
      //),
      //salary: new FormControl(user.salary, Validators.compose([
        //Validators.required
      //])
      //),
      accounttype: new FormControl(account.accountType)


    });


  }
  onClick() : boolean{
    var c=document.getElementById("tc") as HTMLInputElement;
    if (c.checked == true)
    {
      return true;
    }
    return false;
  }
  submit(user:User,account:Account){
    if(this.onClick()){
      //console.log('user:',user);
      //console.log('account:',account);
     // alert("Successfully registered for credit card availing");
     this.cardapply.email = this.user.value.email;
     this.cardapply.customer_id = this.user.value.id;
     this.userService.cardApply(this.cardapply).subscribe(data=>console.log("Added"));
     this.msg = "You have Successfully applied for credit card."
     //setTimeout(()=>{this.router.navigate(['dashboard'])}, 3000);
    }
  }
}
