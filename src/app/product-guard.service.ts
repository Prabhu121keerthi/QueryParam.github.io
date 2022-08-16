import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    console.log(this.canActivate);
    //alert('You are not allowed to view this page. You are redirected to Home Page');

    //this._router.navigate(["home"]);

    return false;

    //return true;
  }
}