import { Component } from '@angular/core';

import { PlugableController } from './plugable/plugable';

/*
  I suggess to call this page using ModalViewcontroller;
*/

@Component({
  selector: 'page-debug',
  template: `
    <ion-content padding>
      This is the debug Page
    </ion-content>
  `
})
export class DebugController {
  constructor() {}
}
