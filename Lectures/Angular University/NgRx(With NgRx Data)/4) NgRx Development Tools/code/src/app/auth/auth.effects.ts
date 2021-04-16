import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthActions } from "./action.type";
import {tap} from "rxjs/operators";
import { Router } from "@angular/router";

/* 
This is a plain angular service that includes for ngRx effects for auth modules
*/
@Injectable()
export class AuthEffects {
   
  login$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => localStorage.setItem('user',JSON.stringify(action.user)))
    ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(action => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    })
  ), {dispatch: false});
  
    constructor(private actions$: Actions, private router: Router) {

/* Approach 1
    Limitations-
      a)We have to manually write the name of action
      b)Also we cannot access the payload of action in type safe way,here we used []
      c)we are calling the subscribe manually and we are defining effect in body of subscribe call
*/

/*     
    actions$.subscribe((action) => {
      if (action.type == "[Login Page] User Login") localStorage.setItem("user", JSON.stringify(action["user"]));
    }); 
*/

/* 
    Version 2, here in tap operator we get all IDE sugegstions
    Problem - 
      1)Manual Subscription required, would like to add some error handling
      2)Also we would like to put in here some Error Handling, if something goes wrong in this observable operator chain in that case these login$ 
        observable is going to error out and the whole chain is going to be destroyed.So if there are further logging actions in our application the user profile
        would not get saved in local storage. we have built in error handling provided was by ngRX because the library is going to make sure that if something goes 
        wrong with this side effect observable then the observable is going to get recreated again.
*/

/*       
    const login$ = this.actions$.pipe(
      // similar to filter
      ofType(AuthActions.login),
      tap((action) => localStorage.setItem("user", JSON.stringify(action.user)))
    );
    login$.subscribe(); 
 
*/
      
/* 
    Version - 3. createEffect adds Error handling and automatic subscription to function retunred by createEffect
    This function is supposed to return an observable,the side effect observable.
    So what the ngrx library is going to do is to take the observable return by this function
    here and it's going to manually subscribe to it. so we dnt need to subscribe to it.
    Here second argument tells ngrx that this side effect does not dispatch new action. otherwise it will create a infine loop. as same action will be
      dispatch
*/

/* 
  let login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user1',JSON.stringify(action.user)))
      ), {dispatch: false});
*/ 
  
  }
}
