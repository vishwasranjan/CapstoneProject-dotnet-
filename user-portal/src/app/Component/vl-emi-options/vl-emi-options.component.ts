import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vl-emi-options',
  templateUrl: './vl-emi-options.component.html',
  styleUrls: ['./vl-emi-options.component.css']
})
export class VlEmiOptionsComponent {
  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }

  Done() {
    alert("Success");
    this.router.navigate(['success-homeloan']);
  }
}
