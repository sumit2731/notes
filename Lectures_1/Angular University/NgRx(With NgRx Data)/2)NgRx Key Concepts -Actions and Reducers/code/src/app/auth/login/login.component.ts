import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import { AppState } from 'app/reducers';

import {login} from '../auth.action';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    /* 
    AppState is the type of state contained inside store. You can find it in reducers/indext.ts file of root module
    */
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const value = this.form.value;
    this.auth
      .login(value.email, value.password)
      .pipe(
        tap((user) => {
          console.log(user);
          /* 
          *We can also create objects in a simple way or we can also use Action cretaors
          */
          //this.store.dispatch({type: "string1", payload: {user: value}});
          this.store.dispatch(login({user}));
          this.router.navigate(["/courses"]);
        })
      )
      .subscribe(noop, () => alert("Login Failed"));
  }
}

