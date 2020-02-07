import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "../user/user.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  
  constructor(
    private userServices: UserService,
    private router: Router
    ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>  {
      
        if (!this.userServices.isLogged()){
          this.router.navigate([''],
          {
            queryParams: {
              fromUrl: state.url
            }
          });
          return false;
        }
      return true; // this is important otherwise we won't have access to the logout function
    } 
}