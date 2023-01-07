import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})
export class HomeLoanComponent implements OnInit {
  
  constructor(private router:Router){}
  
  ngOnInit(): void {
    
  }
  onClick() : boolean{
    var c1=document.getElementById("customCheck1") as HTMLInputElement;
    var c2=document.getElementById("customCheck2") as HTMLInputElement;
    var c3=document.getElementById("customCheck3") as HTMLInputElement;
    var c4=document.getElementById("customCheck4") as HTMLInputElement;
    if (c1.checked == true && c2.checked == true && c3.checked == true && c4.checked == true)
    {
      return true;
    }
    return false;
  }
  proceed(){
    if(this.onClick()){
      this.router.navigate(["hl-applynow"])
    }
  }

}
