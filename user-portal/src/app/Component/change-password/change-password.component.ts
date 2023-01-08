import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentPassword  = "";
  newPassword = "";
  confirmNewPassword = "";
  errMsg = "";
  user : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private userService: UserServiceService, private router: Router) {
    this.userService.loadCurrentUser();
    this.user = this.userService.currentUser;
    console.log(this.user.value.id);
   }

  ngOnInit(): void {
  }
changePassword()
{
  console.log(this.currentPassword);
  console.log(this.newPassword);
  console.log(this.confirmNewPassword);
  if(this.newPassword!=this.confirmNewPassword)
  {
       this.errMsg = "Passwords do not match"
  }
  else{
this.userService.changePassword(this.currentPassword,this.newPassword, this.user.value.id).subscribe(data=>{
  if(data==false)
  {
    this.errMsg = "You have entered wrong current password";
  }

  else
  {
  this.errMsg = "You have successfully changed the password";
  setTimeout(() => {
    this.router.navigate(['login']);
  },3000);
  }

});
  
    }
}
}
