import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs color="yellow">
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  libraryPage = LibraryPage;
  favoritesPage = FavoritesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
