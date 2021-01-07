import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
  // tslint:disable-next-line:one-line
  constructor(private authService: AuthService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return this.authService.isAuthenticated().then(
        (authenticated: boolean) => {
          if (authenticated) {
               return true;
          }
          // tslint:disable-next-line:one-line
          else {
            this.router.navigate(['/']);
            return false;
          }
        }
      );
      }
}
