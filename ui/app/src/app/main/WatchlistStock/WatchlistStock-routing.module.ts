import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistStockHomeComponent } from './home/WatchlistStock-home.component';
import { WatchlistStockNewComponent } from './new/WatchlistStock-new.component';
import { WatchlistStockDetailComponent } from './detail/WatchlistStock-detail.component';

const routes: Routes = [
  {path: '', component: WatchlistStockHomeComponent},
  { path: 'new', component: WatchlistStockNewComponent },
  { path: ':id', component: WatchlistStockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WatchlistStock-detail-permissions'
      }
    }
  }
];

export const WATCHLISTSTOCK_MODULE_DECLARATIONS = [
    WatchlistStockHomeComponent,
    WatchlistStockNewComponent,
    WatchlistStockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistStockRoutingModule { }