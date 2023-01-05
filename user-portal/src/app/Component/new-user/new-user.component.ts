// import { Component, OnInit } from '@angular/core';
// import { User } from '../../Models/user';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-new-user',
//   templateUrl: './new-user.component.html',
//   styleUrls: ['./new-user.component.css']
// })
// export class NewUserComponent implements OnInit{

//   registerForm?:FormGroup;

//   // c ="";

//   constructor(private router:Router){}

//   ngOnInit(): void {
//     let user =new User(0,'','','','','','','','','','','','','','','','');
//     this.registerForm=new FormGroup({
//       firstname: new FormControl(user.firstname, 
//         Validators.compose([
//           Validators.required, 
//           Validators.minLength(5), 
//           Validators.maxLength(20)
//         ])
//         ),
//         middlename: new FormControl(user.middlename, 
//           Validators.compose([
//             Validators.required, 
//             Validators.minLength(5), 
//             Validators.maxLength(20)
//           ])
//           ),
//           lastname: new FormControl(user.lastname, 
//             Validators.compose([
//               Validators.required, 
//               Validators.minLength(5), 
//               Validators.maxLength(20)
//             ])
//             ),
//             email: new FormControl(user.email, 
//               Validators.compose([
//               Validators.required,  
//               Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
//             ])
//             ),
      
//             phonenumber: new FormControl(user.phone, 
//               Validators.compose([
//               Validators.required,  
//               Validators.pattern(/^[6-9]{1}[0-9]{9}$/)
//             ])
//             ),
            
//             country: new FormControl(user.country, Validators.required),
//             city: new FormControl(user.city, Validators.required),

//             pincode: new FormControl(user.pincode, 
//               Validators.compose([
//               Validators.required,  
//               Validators.pattern(/^[1-9]{1}[0-9]{2}[0-9]{3}$/)
//             ])
//             ),
//             state:new FormControl(user.state)

//     });

//   }
//   onClick() : boolean{
//     var c=document.getElementById("tc") as HTMLInputElement;
//     if (c.checked == true)
//     {
//       return true;
//     }
//     else
//     return false;
//   }
//   submit(user?:User){
//     if(this.onClick()){
//       // this.c='/username-password'
//       this.router.navigate(["username-password"])
//       console.log('user:',user);
//     }
//   }
// }