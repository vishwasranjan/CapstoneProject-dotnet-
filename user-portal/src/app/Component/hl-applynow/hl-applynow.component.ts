import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loans } from 'src/app/Models/loans';
import { UserServiceService } from 'src/app/Service/user-service.service';
@Component({
  selector: 'app-hl-applynow',
  templateUrl: './hl-applynow.component.html',
  styleUrls: ['./hl-applynow.component.css']
})
export class HlApplynowComponent implements OnInit{
  msg : string = "";
  registerForm?:FormGroup
  constructor(private router:Router, private userService: UserServiceService){}

  ngOnInit(): void {

    let loans= new Loans(0,0,"",0,0);
    this.registerForm=new FormGroup({
      customerid:new FormControl(loans.customerId, Validators.required),
      amount: new FormControl(loans.amount, Validators.required),
      noOfYears: new FormControl(loans.noOfYears),
      loantype: new FormControl(loans.loanType),
    })
    
  }
  onClick() : boolean{
    var c=document.getElementById("tc") as HTMLInputElement;
    if (c.checked == true)
    {
      return true;
    }
    return false;
  }
  submit(loans:Loans){
    if(this.onClick())
    {
      //alert("Home Loan application successfully initiated")
      console.log(loans);
      console.log(loans.noOfYears);
      this.userService.addLoan(loans).subscribe(res=>console.log(res));
      this.msg = "You have successfully applied for Home Loan"
      this.router.navigate(['dashboard']);
    
    }
  }

}
