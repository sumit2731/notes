import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot , ActivatedRouteSnapshot } from '@angular/router';
import {  } from '@angular/router';
import {  } from '@angular/router/src/router_state';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
}

  constructor() { }

}
