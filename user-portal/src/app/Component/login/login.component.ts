import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authorization } from '../../Service/authorization.service';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username="";
  password="";
  errorMessage="";
 
  constructor(private auth: Authorization, private router: Router, private userService: UserServiceService){}
  ngOnInit(): void{
    console.log("log in component started");
    console.log('login-id:',this.userService.customer_id);
  
  }
  login(){
    console.log("Login started");
    if(this.username.trim().length==0){
      this.errorMessage="Username is required";
      console.log("Username is required");
    }
    else if(this.password.trim().length==0){
      this.errorMessage="Password is required";
      console.log("Password is required");
    }
    else{
      this.errorMessage="";
     // let res=this.auth.login(this.username, this.password);

     //user-service

    //   this.userService.login(this.username, this.password).subscribe({next:(res=>{
    //     alert(res.message);
    //     this.router.navigate(['dashboard']);
    //   }),
    //   error: (err)=>{
    //     this.errorMessage = "Invalid Credentials",
    //     alert(err.error.message)}
    // } );

    this.userService.login(this.username, this.password).subscribe(res=>{
      console.log(res);
      if(res=="Failure")
      this.errorMessage = "Invalid Credentials";
      else
      {
      //alert(res);
      this.userService.setToken(res);
      this.router.navigate(['dashboard']);
      }
    })

// this.userService.login(this.username, this.password).subscribe(res=>{

//   if(res==0)
//   this.errorMessage = "Invalid Credentials";
//   else
//   {
//     console.log(res);
//     this.userService.customer_id = res;
//     this.userService.changec(res);
//     this.router.navigate(['dashboard']);
//     //this.router.navigate(['debit-card']);
//     console.log(this.userService.customer_id);
//   }
// })

      // if(res===200){
       
        
      // }
      // else if(res===404)
      //   this.errorMessage="Invalid Credentials";
      
    }
  }

 
}
