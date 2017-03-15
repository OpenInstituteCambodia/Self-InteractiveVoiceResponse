import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from 'ionic-native';

import { MenuPage } from '../pages/menu/menu';

declare var cordova: any;

@Component({
  selector: 'page-splash',
  template: `
    <ion-content padding Splashscreen [attr.hide]="fadeOut">
      <ion-grid middle>
        <ion-row wrap>
          <ion-col width-20>
            <ion-icon name="ionic" color="primary"></ion-icon>
          </ion-col>
          <ion-col width-80 text>
            សូម​រង់​ចាំ​...
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `
})
export class SplachController {
  fadeOut = false;
  constructor(public navCtrl: NavController) {
    this.init();
  }

  private init() {
    console.log("Cordova", cordova);
    this.databaseCheck();
  }


  private databaseCheck() {

    File.listDir(
      cordova.file.applicationStorageDirectory,
      'databases'
    ).then((checkSuc) => {
      console.log("Database Check: Success!, ", checkSuc);
      let file = checkSuc;

      if (file.length == 0) {
        console.log("Database Check: No Database found, Copying...");
        return File.copyFile(
          cordova.file.applicationDirectory+'www',
          'appdata.db',
          cordova.file.applicationStorageDirectory+'databases',
          'appdata.db'
        );
      } else {
        return new Promise((resolve, reject) => {
          resolve("Database Check: Database already exist!!!");
        });
      }
    }).then((databaseReady) => {
      this.fadeOut = true;
      console.log("Database Check: Completed, Navigating page...");
      setTimeout(() => {
        this.navCtrl.setRoot(
          MenuPage
        );
      }, 1000);
    }).catch( err => console.log("Database Check: Error, ", err) );
  }
}