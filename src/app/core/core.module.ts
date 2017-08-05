import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService} from './logger.service';

import {HeroesModule} from '../heroes/heroes.module';
import {HeroRoutingModule} from '../heroes/heroes-routing.module';

import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    HeroesModule,
    SharedModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent
  ],
  providers: [
    LoggerService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
