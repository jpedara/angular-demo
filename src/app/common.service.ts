import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private route:Router) { }

  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl("/login");
  }
}
