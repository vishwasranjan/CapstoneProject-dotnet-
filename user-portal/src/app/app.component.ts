import { Component } from '@angular/core';
import { UserServiceService } from './Service/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankingPortal';
  constructor(private UserService: UserServiceService){

    console.log('app-id',this.UserService.customer_id);
  
  }
}
