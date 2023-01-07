import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css']
})
export class BankStatementComponent implements OnInit {

  flag:boolean=true;

  registerForm: any = FormGroup;
  constructor( private formBuilder: FormBuilder, private router:Router){}  
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fileUpload: ['', [Validators.required]],})
    
  }
  submitted=false;
  onImageChangeFromFile($event:any)
  {
      if ($event.target.files && $event.target.files[0]) {
        let file = $event.target.files[0];
        console.log(file);
          if(file.type == "application/pdf") {
            console.log("correct");
          }
          else {
            //call validation
            this.registerForm.reset();
            this.registerForm.controls["fileUpload"].setValidators([Validators.required]);
            this.registerForm.get('fileUpload').updateValueAndValidity();
          }
      }
  }

  yesNo() {
   // var y= document.getElementById("yes") as HTMLInputElement;
    var n= document.getElementById("no") as HTMLInputElement;
    var cSA= document.getElementById("createSalaryAccount") as HTMLInputElement;
    if(n.checked== true)
    {
      cSA.style.visibility="visible";
      this.flag=true;
     // return false;
      //console.log(1);
      //console.log(n);
    }
    else{
      cSA.style.visibility="hidden";
      this.flag=false;
       }     
  }
  
  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid")
      alert("Bank Statement Not Submitted");
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Successfully Submitted");
    }
  }
  submit1() {
    // if(this.yesNo()){
     this.router.navigate(["proceed1"])
    // }
  }


}
