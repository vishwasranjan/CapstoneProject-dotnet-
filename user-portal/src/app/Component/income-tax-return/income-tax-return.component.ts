import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Loans } from 'src/app/Models/loans';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-income-tax-return',
  templateUrl: './income-tax-return.component.html',
  styleUrls: ['./income-tax-return.component.css']
})
export class IncomeTaxReturnComponent implements OnInit {
  user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  registerForm: any = FormGroup;
  msg = "";
  it1 = "";
  it2 = "";
  bs = "";
  constructor( private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService){
   this.userService.loadCurrentUser();
   this.user = this.userService.currentUser;

  } 
  loan : Loans = this.userService.loan; 
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    console.log(this.loan);
  }
  submitted=false;
  
  
  submit() {
   // this.submitted = true;
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   console.log("invalid")
    //   //alert("Bank Statement Not Submitted");
    //   this.msg = "Link to files not added";
    //     return;
    // }
    //True if all the fields are filled
    
      //alert("Great!!");
      console.log(this.bs);
      this.loan.iTdocument1 = this.it1;
      this.loan.iTdocument2 = this.it2;
      this.loan.bSdocument = this.bs;
      console.log(this.loan);
      this.userService.loan.iTdocument1 = this.it1;
      this.userService.loan.iTdocument2 = this.it2;
      this.userService.loan.bSdocument = this.bs;
      this.userService.loan.loanStatus = "0";
      this.userService.loan.loanId = 0;
      console.log(this.userService.loan);
      
      this.userService.addLoan(this.userService.loan).subscribe(data=>console.log(data));
      this.msg = "You have successfully applied for home loan";
    
  }

}
