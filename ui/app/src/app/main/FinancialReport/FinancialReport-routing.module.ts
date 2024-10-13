import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialReportHomeComponent } from './home/FinancialReport-home.component';
import { FinancialReportNewComponent } from './new/FinancialReport-new.component';
import { FinancialReportDetailComponent } from './detail/FinancialReport-detail.component';

const routes: Routes = [
  {path: '', component: FinancialReportHomeComponent},
  { path: 'new', component: FinancialReportNewComponent },
  { path: ':id', component: FinancialReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FinancialReport-detail-permissions'
      }
    }
  }
];

export const FINANCIALREPORT_MODULE_DECLARATIONS = [
    FinancialReportHomeComponent,
    FinancialReportNewComponent,
    FinancialReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialReportRoutingModule { }