import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { SplachController } from './splash';
import { MenuPage } from '../pages/menu/menu';
import { UnitPage } from '../pages/unit/unit';
import { HelperPage } from '../pages/helper/helper';

// Debug Modules
import { DebugController } from '../debug/debug';
import { PlugableNavigate } from '../debug/plugable/plugable';

@NgModule({
  declarations: [
    MyApp,
    SplachController,
    MenuPage,
    UnitPage,
    HelperPage,
    DebugController,
    PlugableNavigate
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplachController,
    MenuPage,
    UnitPage,
    HelperPage,
    DebugController,
    PlugableNavigate
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
