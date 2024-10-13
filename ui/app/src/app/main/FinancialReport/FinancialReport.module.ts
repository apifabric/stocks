import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FINANCIALREPORT_MODULE_DECLARATIONS, FinancialReportRoutingModule} from  './FinancialReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FinancialReportRoutingModule
  ],
  declarations: FINANCIALREPORT_MODULE_DECLARATIONS,
  exports: FINANCIALREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinancialReportModule { }