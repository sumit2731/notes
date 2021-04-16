import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  usrPage = 'UsersPage';
  constructor(public navCtrl: NavController) { }
  onGoToUsers() {
    // this.navCtrl.push("UsersPage")
    // .catch(error => console.log('Access denied, argument was '+ error));
    this.navCtrl.push("UsersPage");
  }
}
