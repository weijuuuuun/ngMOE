import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import {NotificationPage} from "../notification/notification";
import {FavoritePage} from "../favorite/favorite";
import {PreferencePage} from "../preference/preference";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  contactPage = ContactPage;
  notificationPage = NotificationPage;
  favoritePage = FavoritePage;
  preferencePage = PreferencePage;

  constructor() {
  }
}
