import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  ngOnInit(): void {
    
  }
  submit(){
    alert("Feedback Successfully Submitted");
  }

}
