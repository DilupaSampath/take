import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import leaflet from 'leaflet';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {
    user:User;
    properties: any[];
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;
    private noteListRef = this.db.list<any>('Workers');

    constructor(private afd: AngularFireDatabase,public navCtrl: NavController, public service: PropertyService, public config: Config,private db: AngularFireDatabase) {
        this.findAll();
    }

    openPropertyDetail(property: any) {
        this.navCtrl.push(PropertyDetailPage, property);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.properties = data;
                if (this.viewMode === "map") {
                    this.showMarkers();
                }
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

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

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.properties.forEach(property => {
            if (property.lat, property.long) {
                let marker: any = leaflet.marker([property.lat, property.long]).on('click', event => this.openPropertyDetail(event.target.data));
                marker.data = property;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
