import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authorization{

  constructor() { }
  login(name: string, password: string){
    if(name=="Susree" && password=="Susree123")
      return 200;
    else
      return 404;
  }

  
}
