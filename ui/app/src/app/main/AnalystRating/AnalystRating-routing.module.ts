import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystRatingHomeComponent } from './home/AnalystRating-home.component';
import { AnalystRatingNewComponent } from './new/AnalystRating-new.component';
import { AnalystRatingDetailComponent } from './detail/AnalystRating-detail.component';

const routes: Routes = [
  {path: '', component: AnalystRatingHomeComponent},
  { path: 'new', component: AnalystRatingNewComponent },
  { path: ':id', component: AnalystRatingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AnalystRating-detail-permissions'
      }
    }
  }
];

export const ANALYSTRATING_MODULE_DECLARATIONS = [
    AnalystRatingHomeComponent,
    AnalystRatingNewComponent,
    AnalystRatingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRatingRoutingModule { }