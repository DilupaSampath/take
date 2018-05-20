import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseServicesProvider {

  constructor(private afd: AngularFireDatabase) {
    console.log('Hello FirebaseServicesProvider Provider');
  }

  getData(){
    let data= this.afd.object("/users/").valueChanges();
    data.subscribe((result) => {
      console.log(result);
    })
   }
}
