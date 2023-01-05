import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userService : UserServiceService, private router: Router){
    
  }
  logout(){
this.userService.removeToken();
this.router.navigate(['login']);
  }
}
