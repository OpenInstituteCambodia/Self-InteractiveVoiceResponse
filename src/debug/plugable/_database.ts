import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { MenuPage} from '../../pages/menu/menu.ts';
import { UnitPage } from '../../pages/unit/unit.ts';
import { HelperPage } from '../../pages/helper/helper.ts';

import { DatabaseController } from '../../app/database';

@Component({
  selector: 'debug-database',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Debugging: Database</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-item-group>
        <ion-item-divider color="light">Table</ion-item-divider>
        <ion-item>
          No History Log Available
        </ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class PlugableDatabase {}

// pragma table_info(units);
