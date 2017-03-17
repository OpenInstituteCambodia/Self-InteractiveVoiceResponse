import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { MenuPage, UnitPage, HelperPage } from '../../pages/**/*.ts';

@Component({
  selector: 'debug-navigate',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Debugging: Navigator</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-item-group>
        <ion-item-divider color="light">Navigate</ion-item-divider>
        <ion-item>
          <ion-label floating>Page:</ion-label>
          <ion-select [(ngModel)]="page">
            <ion-option value="menu" selected="true">Menu</ion-option>
            <ion-option value="unit">Unit</ion-option>
            <ion-option value="helper">Helper</ion-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label floating>Navigate to:</ion-label>
          <ion-input #uri type="text" id="uri"></ion-input>
        </ion-item>
        <div padding>
          <button ion-button block (click)="navigate(page, uri.value)">Go</button>
        </div>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider color="light">History</ion-item-divider>
        <ion-item>
          No History Log Available
        </ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class PlugableNavigate {
  constructor() {}

  private navigate(page, uri) {
    switch(page) {
      case 'menu':

        break;
      case 'unit':

        break;
      case 'helper':

        break;
    }
  }
}
