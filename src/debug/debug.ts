import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlugableController, PlugableNavigator } from './plugable/plugable';

/*
  I suggess to call this page using ModalViewcontroller;
*/

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
        <ion-item (click)="alert()">Database</ion-item>
        <ion-item (click)="alert()">Unit Testing</ion-item>
        <ion-item (click)="alert()">Logs</ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class DebugController {
  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }

  private alert() {
    console.log('LOLz');
  }

  private debugNavigate() {
    this.navCtrl.push(
      PlugableNavigator,{}
    );
  }
}
