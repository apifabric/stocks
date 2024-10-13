import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketIndiceHomeComponent } from './home/MarketIndice-home.component';
import { MarketIndiceNewComponent } from './new/MarketIndice-new.component';
import { MarketIndiceDetailComponent } from './detail/MarketIndice-detail.component';

const routes: Routes = [
  {path: '', component: MarketIndiceHomeComponent},
  { path: 'new', component: MarketIndiceNewComponent },
  { path: ':id', component: MarketIndiceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MarketIndice-detail-permissions'
      }
    }
  },{
    path: ':index_id/MarketIndexComponent', loadChildren: () => import('../MarketIndexComponent/MarketIndexComponent.module').then(m => m.MarketIndexComponentModule),
    data: {
        oPermission: {
            permissionId: 'MarketIndexComponent-detail-permissions'
        }
    }
}
];

export const MARKETINDICE_MODULE_DECLARATIONS = [
    MarketIndiceHomeComponent,
    MarketIndiceNewComponent,
    MarketIndiceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketIndiceRoutingModule { }