import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FavoritePage} from "../pages/favorite/favorite";
import {PreferencePage} from "../pages/preference/preference";
import {NotificationPage} from "../pages/notification/notification";
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {CustomerPage} from "../pages/customer/customer";

@NgModule({
    declarations: [
        MyApp,
        ContactPage,
        TabsPage,
        PreferencePage,
        FavoritePage,
        NotificationPage,
        RegisterPage,
        LoginPage,
        CustomerPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ContactPage,
        TabsPage,
        PreferencePage,
        FavoritePage,
        NotificationPage,
        RegisterPage,
        LoginPage,
        CustomerPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
