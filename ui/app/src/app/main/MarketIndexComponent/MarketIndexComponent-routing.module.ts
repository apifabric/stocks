import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketIndexComponentHomeComponent } from './home/MarketIndexComponent-home.component';
import { MarketIndexComponentNewComponent } from './new/MarketIndexComponent-new.component';
import { MarketIndexComponentDetailComponent } from './detail/MarketIndexComponent-detail.component';

const routes: Routes = [
  {path: '', component: MarketIndexComponentHomeComponent},
  { path: 'new', component: MarketIndexComponentNewComponent },
  { path: ':id', component: MarketIndexComponentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MarketIndexComponent-detail-permissions'
      }
    }
  }
];

export const MARKETINDEXCOMPONENT_MODULE_DECLARATIONS = [
    MarketIndexComponentHomeComponent,
    MarketIndexComponentNewComponent,
    MarketIndexComponentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketIndexComponentRoutingModule { }