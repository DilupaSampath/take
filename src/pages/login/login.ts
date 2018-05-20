import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { WelcomePage } from '../welcome/welcome';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user = {} as User;
userType='User';
togglestate=false;
  constructor(public loadingCtrl: LoadingController,private aFauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  async login(user:User)
  {
    try {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 10000,
        dismissOnPageChange:true
      });
      loader.present();
      await this.aFauth.auth.signInWithEmailAndPassword(user.email,user.password);
     
      
      this.navCtrl.setRoot(WelcomePage);
    } catch (e) {
      console.log("sampath log error--> "+JSON.stringify(e));
      this.ErrorshowAlert(e['message']);
    }
  
  }
  register(){
this.navCtrl.push(RegisterPage);
  }
  ErrorshowAlert(message:string) {
    let alert = this.alertCtrl.create({
      title: '<strong style="color: red">Login failed!<strong>',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  changeUserTpe(){
    console.log("toggle work");
    if(this.togglestate){
    
      console.log("true work");
      this.userType='Worker';
    }else{
      console.log("false user");
      this.userType='User';
    }
   
  }
}
