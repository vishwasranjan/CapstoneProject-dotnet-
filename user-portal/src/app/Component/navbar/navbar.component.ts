import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService : UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userService.removeToken();
    this.router.navigate(['login']);
      }

}
