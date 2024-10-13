import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WATCHLISTSTOCK_MODULE_DECLARATIONS, WatchlistStockRoutingModule} from  './WatchlistStock-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WatchlistStockRoutingModule
  ],
  declarations: WATCHLISTSTOCK_MODULE_DECLARATIONS,
  exports: WATCHLISTSTOCK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchlistStockModule { }