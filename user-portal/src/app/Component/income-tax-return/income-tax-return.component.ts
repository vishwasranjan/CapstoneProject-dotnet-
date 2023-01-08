import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-tax-return',
  templateUrl: './income-tax-return.component.html',
  styleUrls: ['./income-tax-return.component.css']
})
export class IncomeTaxReturnComponent implements OnInit {
  
  registerForm: any = FormGroup;
  constructor( private formBuilder: FormBuilder){}  
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    
  }
  submitted=false;
  
  
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
      alert("Great!!");
    }
  }

}
