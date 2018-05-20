import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PropertyService {
  properties:any[];
constructor(private afd: AngularFireDatabase){
  this.findAll();
}
  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  // findAll() {
    
  //   return Promise.resolve(properties);
  // }
  findAll() {
    let data:Observable<any[]>= this.afd.list("/Workers/asd").valueChanges();
    data
    .subscribe((result:any) => {
      console.log(result);
      this.properties=result;
    })
   
    // this.service.findAll()
    //     .then(data => this.properties = data)
    //     .catch(error => alert(error));
}

  findById(id) {
    return Promise.resolve(this.properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.properties.filter((property: any) =>
        (property.name +  ' ' +property.Colombo +  ' ' + property.city + ' ' + property.type).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
