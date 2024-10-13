import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PORTFOLIOSTOCK_MODULE_DECLARATIONS, PortfolioStockRoutingModule} from  './PortfolioStock-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PortfolioStockRoutingModule
  ],
  declarations: PORTFOLIOSTOCK_MODULE_DECLARATIONS,
  exports: PORTFOLIOSTOCK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioStockModule { }