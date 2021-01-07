
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../../home/home";

@IonicPage()
@Component({
  selector: "page-user",
  templateUrl: "user.html"
})
export class UserPage implements OnInit {
  name: string;
  constructor(private navParams: NavParams,
              private navCtrl: NavController) {}
  ngOnInit() {
    this.name = this.navParams.data.userName;
    // this.name = this.navParams.get('userName');
  }
  onGoBack() {
    this.navCtrl.push(HomePage);
    // this.navCtrl.pop();
    // this.navCtrl.popToRoot();
    // this.navCtrl.popAll();
  }
}

