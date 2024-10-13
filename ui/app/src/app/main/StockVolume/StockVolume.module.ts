import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKVOLUME_MODULE_DECLARATIONS, StockVolumeRoutingModule} from  './StockVolume-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockVolumeRoutingModule
  ],
  declarations: STOCKVOLUME_MODULE_DECLARATIONS,
  exports: STOCKVOLUME_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockVolumeModule { }