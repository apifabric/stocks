import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistHomeComponent } from './home/Watchlist-home.component';
import { WatchlistNewComponent } from './new/Watchlist-new.component';
import { WatchlistDetailComponent } from './detail/Watchlist-detail.component';

const routes: Routes = [
  {path: '', component: WatchlistHomeComponent},
  { path: 'new', component: WatchlistNewComponent },
  { path: ':id', component: WatchlistDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Watchlist-detail-permissions'
      }
    }
  },{
    path: ':watchlist_id/WatchlistStock', loadChildren: () => import('../WatchlistStock/WatchlistStock.module').then(m => m.WatchlistStockModule),
    data: {
        oPermission: {
            permissionId: 'WatchlistStock-detail-permissions'
        }
    }
}
];

export const WATCHLIST_MODULE_DECLARATIONS = [
    WatchlistHomeComponent,
    WatchlistNewComponent,
    WatchlistDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }