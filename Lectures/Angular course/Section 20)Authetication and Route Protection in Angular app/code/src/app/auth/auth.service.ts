import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(private router: Router) { }
  token: string;
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => {
        console.log(error);
      }
    );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      this.router.navigate(['/']);
    firebase.auth().currentUser.getIdToken()
    .then((token: string) => {
      console.log(token);
      this.token = token;
    });
    })
    .catch(error => console.log(error));
  }
  logout() {
     firebase.auth().signOut();
     this.token = null;
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
}
