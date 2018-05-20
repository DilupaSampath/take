import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServicesProvider } from '../providers/firebase-services/firebase-services';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { Camera } from '@ionic-native/camera';


const firebaseConfig = {
  apiKey: "AIzaSyD8pYw45d3JzBxAnSJFxSmRDmiKnivlp5Y",
  authDomain: "ionicapp-8fdbe.firebaseapp.com",
  databaseURL: "https://ionicapp-8fdbe.firebaseio.com",
  projectId: "ionicapp-8fdbe",
  storageBucket: "ionicapp-8fdbe.appspot.com",
  messagingSenderId: "707913552448"
};
@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    LoginPage,
    RegisterPage ,
    ChatroomPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    LoginPage,
    RegisterPage,
    ChatroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, FirebaseServicesProvider
  ]
})
export class AppModule {}
