import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  qfavorite: Quote[];
  constructor(private quotesServices: QuotesService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.qfavorite = this.quotesServices.getAllFavoriteQuotes();
  }
 

}
