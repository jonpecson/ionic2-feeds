import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PostPage } from './../pages/post/post';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Data } from './../providers/data';

import {AngularFireModule} from 'angularfire2';


const config = {
    apiKey: "AIzaSyCh0IJcBrtX4uSxxiCrRw3aKMI72l_Fqb0",
    authDomain: "ng4-demo-b5333.firebaseapp.com",
    databaseURL: "https://ng4-demo-b5333.firebaseio.com",
    projectId: "ng4-demo-b5333",
    storageBucket: "ng4-demo-b5333.appspot.com",
    messagingSenderId: "77551739130"
  };


@NgModule({
  declarations: [
    MyApp,
    PostPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
