import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import { LoginPage } from '../pages/login/login';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = RegisterPage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Home', component: WelcomePage, icon: 'home'},
            {title: 'Workers', component: PropertyListPage, icon: 'people'},
            {title: 'Chat Room', component: BrokerListPage, icon: 'md-chatbubbles'},
            {title: 'Favorites', component: FavoriteListPage, icon: 'star'},

        ];

        this.accountMenuItems = [
            {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
            {title: 'Logout', component: LoginPage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Welcome', component: WelcomePage, icon: 'bookmark'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
