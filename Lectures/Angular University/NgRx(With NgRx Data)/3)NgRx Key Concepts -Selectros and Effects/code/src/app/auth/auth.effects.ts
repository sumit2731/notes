import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthActions } from "./action.type";
import {tap} from "rxjs/operators";
import { Router } from "@angular/router";

/* 
This is a plain angular service that includes ngRx effects for auth modules.this class here should 
  not be injected anywhere in your code. This class is going to be handled only by the ngRX effects library.
  we pass this class to forFeature method of EffectsModule in AuthModule.
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

    /* 
      Actions service is provided by EffectsModule. It is a observable which will emit a value each time action is dispatched.

    */
  
    constructor(private actions$: Actions, private router: Router) {

      //Here in console we will get action object i.e object wih type proeprty
      //this.actions$.subscribe(val => console.log(val));

/* Approach 1
    Limitations-
      a)We have to manually write the name of action. So we are repeatig the type of action
      b)Also we cannot access the payload of action in type safe way,here we used []. because compiler is not sure,
        if we have this user property
      c)we are calling the subscribe manually and we are defining effect in body of subscribe call
      d)There is no error hnadling here if something goes wrong
*/

/*     
    actions$.subscribe((action) => {
      if (action.type == "[Login Page] User Login") localStorage.setItem("user", JSON.stringify(action["user"]));
    }); 
*/

/* 
    Version 2, here in tap operator we get all IDE sugegstions. for filtering purpose we can use filter rxjs operator but since this
      is very commpon operation ngRx provides us with a special operator  "ofType" operator which makes it very easier to filter
      for certain actions
    Problem - 
      1)Manual Subscription required, would like to add some error handling
      2)Also we would like to put in here some and her handling in place.What if something goes wrong here in these observable 
        operator chain? Well then in that case this logging observable is going to error out and the whole chain is going to be
         destroyed.So if there are further logging  actions in our application ,the user profile would not get saved in local 
         storage.So we would like to add to our application as a safety measure, Some way of recreating the login$ side effect 
         observable in case something goes wrong in order to make sure that our user profile always gets to local storage.

      Now we can achieve both those things by using the createEffect utility function from ngRx effects.
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
    Version - 3. createEffect takes a callbak as a argument.This callback should return a observable,side Effect observable.
    So what the ngRX/effects library is going to do is to take the observable return by this function here and it's going to manually subscribe to it.
    
    
    createEffect adds Error handling and automatic subscription to observatio. retunred by createEffect
    This function is supposed to return an observable,the side effect observable.So what the ngrx library is going to do is to take the observable return by 
    this function here and it's going to manually subscribe to it. so we do need to subscribe.
    
    Here second argument tells ngrx that this side effect does not dispatch new action. otherwise it will create a infine loop. as same action will be
    dispatch.
    advantages, we do not need to manual subscription and we have error handling.

    if we want to disaptch a new action then this observable should emit that action. and that actio will be dispatched 
      automatically. also in order for this effect to work you should define this login$ as a class level variable
*/

/* 
  let login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user1',JSON.stringify(action.user)))
      ), {dispatch: false});
*/ 
  
  }
}
