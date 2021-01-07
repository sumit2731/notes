import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD5q6-X4ALD9zqqpd1MFQ2MDbgaT-RFEZw',
    authDomain: 'ng-recipe-book-b0a6d.firebaseapp.com'
    });
}

}
