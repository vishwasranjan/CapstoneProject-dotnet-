import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{
  ngOnInit(): void {
    
  }
  submit(){
    alert("Query Successfully Submitted")
  }

}
