import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';



@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public quotesService: QuotesService,
    private modalCtrl: ModalController) {
  }
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  onViewQuote() {
    
  }

  

}
