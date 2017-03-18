import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, AlertController } from 'ionic-angular';

import { MenuPage} from '../../pages/menu/menu.ts';
import { UnitPage } from '../../pages/unit/unit.ts';
import { HelperPage } from '../../pages/helper/helper.ts';

import { DatabaseController } from '../../app/database';

@Component({
  selector: 'debug-navigate',
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Debugging: Navigator</ion-title>
        <ion-buttons end *ngIf="this._mode == 'basic'">
          <button ion-button icon-only (click)="switchMode()">
            <ion-icon name="list"></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="_mode == 'basic'">
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
          <button ion-button block (click)="navigate('unit', uri.value)">Go</button>
        </div>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider color="light">History</ion-item-divider>
        <ion-item *ngIf="units.length == 0">
          No History Log Available
        </ion-item>
        <ion-item *ngFor="let item of units; let i = index;" (click)="navigate('unit', item.unit_id)" (press)="deleteHistory(item.unit_id, item.unit_style)">
          {{item.unit_id}} <ion-badge item-right [ngClass]="colorSwatch(item.unit_style)">{{item.unit_style}}</ion-badge>
        </ion-item>
      </ion-item-group>
    </ion-content>

    <ion-content *ngIf="_mode == 'complex'">
      <ion-item-group>
        <ion-item-divider color="light">Available units</ion-item-divider>
        <ion-item *ngFor="let item of units; let i = index;" (click)="navigate('unit', item.unit_id)">
          {{item.unit_id}} <ion-badge item-right [ngClass]="colorSwatch(item.unit_style)">{{item.unit_style}}</ion-badge>
        </ion-item>
      </ion-item-group>
    </ion-content>
  `
})
export class PlugableNavigate {
  public units: Array<any> = [];
  private _mode = 'basic';
  constructor(private _db: DatabaseController, public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    if (typeof this.navParams.get('mode') != 'undefined') {
      this._mode = this.navParams.get('mode');
    }


  }

  ionViewDidLoad() {
    if (this._mode == 'basic') {
      this.loadHistory();
    }else if(this._mode == 'complex') {
      this.prepopulateUnit();
    }
  }

  private switchMode() {
    this.navCtrl.push(PlugableNavigate, { mode: 'complex'});
  }

  private prepopulateUnit() {
    let pending = this.loadingCtrl.create({
      spinner: 'dots'
    });
    pending.present();
    this._db.executeSQL(
      'SELECT unit_id, unit_style FROM units',
      []
    ).then((unitData) => {
      for (let i = 0; i < unitData.rows.length; i++) {
        this.units.push(unitData.rows.item(i));

        if (i == unitData.rows.length-1) {
          pending.dismiss();
        }
      }
    }).catch(err => console.log(err) );
  }

  private navigate(page, uri) {
    switch(page) {
      case 'menu':

        break;
      case 'unit':
        this._db.executeSQL("SELECT * FROM units WHERE unit_id == '"+uri+"'", []).then((unitData) => {
          this.navCtrl.push(UnitPage, {
            data: unitData.rows.item(0)
          });
          this.saveHistory(uri, unitData.rows.item(0)['unit_style']);
        }).catch( err => { console.log(err) });
        break;
      case 'helper':

        break;
    }
  }

  private loadHistory() {
    this.units = [];
    let storage = window.localStorage;
    let temp = storage.getItem('debug_unit_history');
    let data = temp.split(' | ');
    for (let i = 0; i < data.length; i++) {
      if (data[i] != "") {
        this.units.push(JSON.parse(data[i]));
      }
    }

  }

  private saveHistory(uri, style) {
    let storage = window.localStorage;

    let storedData = storage.getItem('debug_unit_history') == null ? '' : storage.getItem('debug_unit_history');
    let temp = storedData+'{"unit_id": "'+uri+'", "unit_style": "'+style+'"} | ';
    storage.setItem('debug_unit_history', temp);
    console.log(temp);
  }

  private deleteHistory(uri, style) {
    let alert = this.alertCtrl.create({
      title: 'Delete this item?',
      message: 'You may loose what unsaved while debugging.',
      buttons: [
        {
          text: "I'll keep it for later",
          role: 'cancel'
        },
        {
          text: "Yes, Delete IT!!! *Poof*",
          handler: () => {
            let storage = window.localStorage;

            let storedData = storage.getItem('debug_unit_history');
            let temp = '{"unit_id": "'+uri+'", "unit_style": "'+style+'"} | ';
            storedData = storedData.replace(temp, '');
            storage.setItem('debug_unit_history', storedData);
            console.log(storedData);
            this.loadHistory();
          }
        },
      ]
    });
    alert.present();
  }

  private colorSwatch(style) {
    let colorStyle = '';
    switch(style) {
      case 'M1':
        colorStyle = 'badge-md-primary badge-ios-primary';
        break;
      case 'M2':
        colorStyle = 'badge-md-secondary badge-ios-secondary';
        break;
      case 'M3':
        colorStyle = 'badge-md-danger badge-ios-danger';
        break;
      case 'M4':
        colorStyle = 'badge-md-dark badge-ios-dark';
        break;
      case 'M5':
        colorStyle = 'badge-md-light badge-ios-light';
        break;
    }
    return colorStyle;
  }
}
