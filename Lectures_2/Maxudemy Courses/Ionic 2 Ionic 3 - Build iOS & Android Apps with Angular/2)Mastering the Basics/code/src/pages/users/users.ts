import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-users",
  templateUrl: "users.html"
})
export class UsersPage {
  constructor(private navCtrl: NavController) {}
  onLoadUser(name: string) {
    // this.navCtrl.push('UserPage', name);
    this.navCtrl.push("UserPage", { userName: name });
  }
  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log("Ion view Can enter");
    const rnd = Math.random();
    return rnd > 0.5;
  }
  ionViewDidLoad() {
    console.log("IonViewDidLoad");
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }
  ionViewDidEnter() {
    console.log("onViewDidEnter");
  }
  ionViewCanLeave(): boolean | Promise<void> {
    const promise: Promise<void> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }
  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }
}
