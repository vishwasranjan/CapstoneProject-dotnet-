import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/user';
@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  
  

  constructor(){
    
  }
  
  ngOnInit(): void {
    
  }
  submit(user: User){
    
  }
} 
