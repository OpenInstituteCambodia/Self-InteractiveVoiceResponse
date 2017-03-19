import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { MenuPage} from '../../pages/menu/menu.ts';
import { UnitPage } from '../../pages/unit/unit.ts';
import { HelperPage } from '../../pages/helper/helper.ts';

import { DatabaseController } from '../../app/database';

@Component({
  selector: 'debug-unittest',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Debugging: Unit Test</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="_mode == 'basic'">
      <ion-item-group>
        <ion-item-divider color="danger">Unit Test</ion-item-divider>
        <div padding>
          <button ion-button block color="danger" (click)="startUnitTest()">Start Unit Test</button>
        </div>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>Tools</ion-item-divider>
        <div padding>
          <button ion-button block color="dark" (click)="switchMode()">Start One-to-One Test</button>
          <button ion-button block>Continue from last</button>
        </div>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>Potential problems</ion-item-divider>
        <ion-item>Thanks god there is no errors...</ion-item>
      </ion-item-group>
    </ion-content>

    <ion-content *ngIf="_mode == 'complex'">
      <ion-grid>
        <ion-row wrap>
          <ion-col width-100>
            <h1 text-center>
              L1P32Q2
            </h1>
          </ion-col>
          <ion-col width-100>
            <ion-card>
              <img src="assets/files/images/L1.1P12.jpg">
            </ion-card>
            <h1 hidden test-text text-center>text</h1>
          </ion-col>

          <ion-col width-100 text-center>
            <h4>Does this information correct?</h4>
          </ion-col>
          <ion-col width-50>
            <button ion-button confirm block color="secondary">Yes</button>
          </ion-col>
          <ion-col width-50>
            <button ion-button confirm block color="danger">No</button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
  styles: [`
    ion-grid {
      height: 100%;
      overflow: hidden;
      justify-content: center !important;
      align-content: center !important;
    }
    [test-text] {
      padding: 15% 0;
      font-size: 3em;
    }
    [ion-button][confirm] {
      height: 100px;
      font-size: 2em;
    }
    [text-center] {
      text-align: center;
    }
  `]
})

export class PlugableUnitTest {
  private _mode: string = 'basic';

  constructor(private _db: DatabaseController, public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    if (typeof this.navParams.get('mode') != 'undefined') {
      this._mode = this.navParams.get('mode');
    }
  }

  private switchMode() {
    this.navCtrl.push(PlugableUnitTest, { mode: 'complex'});
  }

  private startUnitTest() {
    let message = {
      content: 'Start Unit Testing...'
    };
    let loading = this.loadingCtrl.create(message);
    loading.present();


    // Validating files

    // Testing Playback function

    // Save information

  }

  private resumeUnitTest() {}

  private savePotentialProblem() {}
}
