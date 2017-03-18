import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PlugableNavigate, PlugableDatabase, PlugableUnitTest } from './plugable/plugable';

@Component({
  selector: 'page-debug',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Application Debugging</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-item-group>
        <ion-item-divider color="danger">Tools</ion-item-divider>
        <ion-item (click)="debugNavigate()">Navigate</ion-item>
        <ion-item (click)="debugDatabase()">Database</ion-item>
        <ion-item (click)="debugUnitTesting()">Unit Testing</ion-item>
        <ion-item (click)="debugLogs()">Logs</ion-item>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>Application</ion-item-divider>
        <ion-item (click)="debugSaveLogs()">Save logs</ion-item>
        <ion-item (click)="debugRestartApp()">Restart Application</ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class DebugController {
  private platformStorage;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  private debugNavigate(): void {
    this.navCtrl.push(PlugableNavigate);
  }
  private debugDatabase(): void {
    this.navCtrl.push(PlugableDatabase);
  }
  private debugUnitTesting(): void {
    this.navCtrl.push(PlugableUnitTest);
  }
  private debugLogs(): void {}
  private debugRestartApp(): void {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'You may loose what unsaved while debugging.',
      buttons: [
        {
          text: "No, Oops! Going back...",
          role: 'cancel'
        },
        {
          text: "Yes, I understand",
          handler: () => {
            window.location.reload();
          }
        },
      ]
    });
    alert.present();
  }

}
