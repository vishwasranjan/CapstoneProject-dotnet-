import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emi-options',
  templateUrl: './emi-options.component.html',
  styleUrls: ['./emi-options.component.css']
})
export class EmiOptionsComponent implements OnInit{

  constructor(private router: Router){

  }

  ngOnInit(): void {
  
  }

  Done(){
    alert("Success");
    this.router.navigate(['success-homeloan']);
  }
}
