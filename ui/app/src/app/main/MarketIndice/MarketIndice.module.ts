import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MARKETINDICE_MODULE_DECLARATIONS, MarketIndiceRoutingModule} from  './MarketIndice-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MarketIndiceRoutingModule
  ],
  declarations: MARKETINDICE_MODULE_DECLARATIONS,
  exports: MARKETINDICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarketIndiceModule { }