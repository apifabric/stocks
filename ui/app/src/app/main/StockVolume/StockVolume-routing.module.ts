import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockVolumeHomeComponent } from './home/StockVolume-home.component';
import { StockVolumeNewComponent } from './new/StockVolume-new.component';
import { StockVolumeDetailComponent } from './detail/StockVolume-detail.component';

const routes: Routes = [
  {path: '', component: StockVolumeHomeComponent},
  { path: 'new', component: StockVolumeNewComponent },
  { path: ':id', component: StockVolumeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockVolume-detail-permissions'
      }
    }
  }
];

export const STOCKVOLUME_MODULE_DECLARATIONS = [
    StockVolumeHomeComponent,
    StockVolumeNewComponent,
    StockVolumeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockVolumeRoutingModule { }