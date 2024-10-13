import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MARKETINDEXCOMPONENT_MODULE_DECLARATIONS, MarketIndexComponentRoutingModule} from  './MarketIndexComponent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MarketIndexComponentRoutingModule
  ],
  declarations: MARKETINDEXCOMPONENT_MODULE_DECLARATIONS,
  exports: MARKETINDEXCOMPONENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarketIndexComponentModule { }