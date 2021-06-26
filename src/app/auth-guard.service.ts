import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!!sessionStorage.getItem("loggedIn") && sessionStorage.getItem("loggedIn") == "true"){
      return true;
    }
    else{
      sessionStorage.clear();
      console.log(window.location.href);
      sessionStorage.setItem("location",window.location.href);
      this.route.navigateByUrl('/login');
      return false;
    }
  }
}
