import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioStockHomeComponent } from './home/PortfolioStock-home.component';
import { PortfolioStockNewComponent } from './new/PortfolioStock-new.component';
import { PortfolioStockDetailComponent } from './detail/PortfolioStock-detail.component';

const routes: Routes = [
  {path: '', component: PortfolioStockHomeComponent},
  { path: 'new', component: PortfolioStockNewComponent },
  { path: ':id', component: PortfolioStockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PortfolioStock-detail-permissions'
      }
    }
  }
];

export const PORTFOLIOSTOCK_MODULE_DECLARATIONS = [
    PortfolioStockHomeComponent,
    PortfolioStockNewComponent,
    PortfolioStockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioStockRoutingModule { }