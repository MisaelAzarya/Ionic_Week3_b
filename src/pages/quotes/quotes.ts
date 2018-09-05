import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotes: {category: string, quotes: Quote[], icon: string};
  qdetail: Quote[];
  flag: string[] = [];
  qfavorite: Quote[];
  constructor(private alertCtrl: AlertController, private quotesServices: QuotesService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.quotes = this.navParams.data;
    this.qdetail = this.quotes.quotes;
    for(var i=0; i<this.qdetail.length;i++){
      this.flag[i] = "false";
    }
    console.log(this.quotes);
    console.log(this.qdetail);
  }

  onAddQuote(quote: Quote){
    this.quotesServices.addQuoteToFavorites(quote);
  }

  onShowAlert(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.onAddQuote(quote);
            this.qfavorite = this.quotesServices.getAllFavoriteQuotes();
            console.log(this.qfavorite);
            for(var i=0;i<this.qdetail.length;i++){
              var id = this.qdetail[i].id;
               for(var j=0;j<this.qfavorite.length;j++){
                 if(this.qfavorite[j].id == id){
                   this.flag[i] = "true";
                 }
               }
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("NO is clicked");
          }
        }
      ]
    });

    alert.present();
  }

  unfavoriteAlert(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Unfavorite Quote',
      message: 'Are you sure you want to delete this quote from your favorites?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.qfavorite = this.quotesServices.getAllFavoriteQuotes();
            console.log(this.qfavorite);
            for(var i=0;i<this.qdetail.length;i++){
              var id = this.qdetail[i].id;
               for(var j=0;j<this.qfavorite.length;j++){
                 if(this.qfavorite[j].id == id){
                   this.qfavorite.splice(j);
                  this.flag[i] = "false";
                 }
               }
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("NO is clicked");
          }
        }
      ]
    });

    alert.present();
  }

}
