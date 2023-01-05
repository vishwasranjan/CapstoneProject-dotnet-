import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/user';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { map } from 'rxjs';
import { Account } from 'src/app/Models/account';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users: User[] = [];
  customer_id:any;
  u : User = new User(0,"","","","","","","","", "", "","", "");
  account : Account = new Account(0,"","", "", "",0);
  constructor(private userService: UserServiceService){
  

  }

  
ngOnInit(): void {
  this.userService.loadCurrentUser();  //loading user info in token to current-user variable of service
  console.log('user-id');
  console.log(this.userService.currentUser.value.id);
  this.customer_id = this.userService.customer_id;
  console.log('home:',this.customer_id);

  this.userService.getUsers().pipe(map(data=>data.map((
    {customerId,firstName, middleName,lastName,phone, alternatePhone,email,city,state,country,pin,gender})=>({customerId,firstName, middleName,lastName,phone, alternatePhone,email,city,state,country,pin,gender})
    // {e.firstName,e.middleName,e.lastName, e.gender,e.phone,e.alternatePhone, e.dob, e.city, e.state,e.city,e.pincode }
    ))).subscribe(res=> 
  //console.log(res)
  {
  this.users = res;
  console.log(this.users);
  }
    )
  
    this.userService.getUserById(this.userService.currentUser.value.id).subscribe(data=>{
  
      this.u = data
      console.log(this.u);
      console.log(this.userService.currentUser.value.id);
      console.log(this.u.firstName);
    })
   this.userService.getAccountById(this.userService.currentUser.value.id).subscribe(data=>{
     this.account = data;
     console.log(this.account);
   });
}

}
