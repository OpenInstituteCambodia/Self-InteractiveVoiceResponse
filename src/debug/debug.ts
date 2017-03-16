import { Component } from '@angular/core';

import { PlugableController } from './plugable/plugable';

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
        <ion-item (press)="alert()">Database</ion-item>
        <ion-item (press)="alert()">Unit Testing</ion-item>
        <ion-item (press)="alert()">Logs</ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class DebugController {
  constructor() {}

  private alert() {
    alert('pressed lolz :D');
  }
}
