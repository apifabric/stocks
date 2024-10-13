import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ANALYSTRATING_MODULE_DECLARATIONS, AnalystRatingRoutingModule} from  './AnalystRating-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AnalystRatingRoutingModule
  ],
  declarations: ANALYSTRATING_MODULE_DECLARATIONS,
  exports: ANALYSTRATING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalystRatingModule { }