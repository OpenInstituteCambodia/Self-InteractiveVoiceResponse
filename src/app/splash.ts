import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite, File, IsDebug } from 'ionic-native';

import { HomePage } from '../pages/home/home';

declare var cordova: any;

@Component({
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
  fadeOut;
  constructor(private platform: Platform, private loadingCtrl: LoadingController) {
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
      console.log("Database Check: Completed, Navigating page...");
      this.fadeOut = true;
      setTimeout(() => {
        // this.rootPage = HomePage;
      }, 500);
    }).catch( err => console.log("Database Check: Error, ", err) );
  }
}
