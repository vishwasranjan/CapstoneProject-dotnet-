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
    this.registerForm = this.formBuilder.group({
      fileUpload: ['', [Validators.required]],
 
    });
    
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
