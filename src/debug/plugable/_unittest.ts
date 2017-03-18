import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { MenuPage, UnitPage, HelperPage } from '../../pages/**/*.ts';

@Component({
  selector: 'debug-unittest',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Debugging: Unit Test</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-item-group>
        <ion-item-divider color="danger">Tools</ion-item-divider>
        <div padding>
          <button ion-button block color="dark">Start Unit Test</button>
          <button ion-button block>Continue from last</button>
        </div>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>Potential problems</ion-item-divider>
        <ion-item>Thanks god there is not errors...</ion-item>
      </ion-item-group>
    </ion-content>
  `
})

export class PlugableUnitTest {

}
