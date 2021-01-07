import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: Quote[]; icon: string };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public quoteService: QuotesService) {}
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote: Quote) {
    console.log('methd called');
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
        text: 'Yes,go ahead',
        handler: () => {
         this.quoteService.addQuoteToFavorite(selectedQuote);
         }
        },
        {
          text: 'No,I chnaged my mind',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
      }]
    });
    alert.present();
  }
}

