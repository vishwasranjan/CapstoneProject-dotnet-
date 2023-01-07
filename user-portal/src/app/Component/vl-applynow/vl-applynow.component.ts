import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loans } from 'src/app/Models/loans';

@Component({
  selector: 'app-vl-applynow',
  templateUrl: './vl-applynow.component.html',
  styleUrls: ['./vl-applynow.component.css']
})
export class VlApplynowComponent {

  //constructor(private router:Router){}

  // registerForm?:FormGroup 
  // ngOnInit(): void {
  //   let loans= new Loans(0,"","","");
  //   this.registerForm=new FormGroup({
  //     customerid:new FormControl(loans.customerid, Validators.required),
  //     amount: new FormControl(loans.loanamount, Validators.required),
  //     tenure: new FormControl(loans.tenure),
  //     loantype: new FormControl(loans.loantype),
  //   })
    
    
  // }

  // onClick() : boolean{
  //   var c=document.getElementById("tc") as HTMLInputElement;
  //   if (c.checked == true)
  //   {
  //     return true;
  //   }
  //   return false;
  // }
  // submit(loans:Loans){
  //   if(this.onClick())
  //   {
  //     alert("Vehicle Loan application successfully initiated")
  //     console.log(loans);
  //     this.router.navigate(['declaration']);
    
  //   }

  // }

}
