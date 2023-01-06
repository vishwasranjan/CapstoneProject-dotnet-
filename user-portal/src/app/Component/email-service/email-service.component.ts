import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-email-service',
  templateUrl: './email-service.component.html',
  styleUrls: ['./email-service.component.css']
})
export class EmailServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    console.log("Add Payee clicked");
    e.preventDefault();
    emailjs.sendForm('service_8y7lcwf', 'template_lierchr', e.target as HTMLFormElement, 'oxl-VBrM83r3GbB6s')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
