import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from './home/Stock-home.component';
import { StockNewComponent } from './new/Stock-new.component';
import { StockDetailComponent } from './detail/Stock-detail.component';

const routes: Routes = [
  {path: '', component: StockHomeComponent},
  { path: 'new', component: StockNewComponent },
  { path: ':id', component: StockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Stock-detail-permissions'
      }
    }
  },{
    path: ':stock_id/AnalystRating', loadChildren: () => import('../AnalystRating/AnalystRating.module').then(m => m.AnalystRatingModule),
    data: {
        oPermission: {
            permissionId: 'AnalystRating-detail-permissions'
        }
    }
},{
    path: ':stock_id/Dividend', loadChildren: () => import('../Dividend/Dividend.module').then(m => m.DividendModule),
    data: {
        oPermission: {
            permissionId: 'Dividend-detail-permissions'
        }
    }
},{
    path: ':stock_id/FinancialReport', loadChildren: () => import('../FinancialReport/FinancialReport.module').then(m => m.FinancialReportModule),
    data: {
        oPermission: {
            permissionId: 'FinancialReport-detail-permissions'
        }
    }
},{
    path: ':stock_id/MarketIndexComponent', loadChildren: () => import('../MarketIndexComponent/MarketIndexComponent.module').then(m => m.MarketIndexComponentModule),
    data: {
        oPermission: {
            permissionId: 'MarketIndexComponent-detail-permissions'
        }
    }
},{
    path: ':stock_id/News', loadChildren: () => import('../News/News.module').then(m => m.NewsModule),
    data: {
        oPermission: {
            permissionId: 'News-detail-permissions'
        }
    }
},{
    path: ':stock_id/PortfolioStock', loadChildren: () => import('../PortfolioStock/PortfolioStock.module').then(m => m.PortfolioStockModule),
    data: {
        oPermission: {
            permissionId: 'PortfolioStock-detail-permissions'
        }
    }
},{
    path: ':stock_id/StockPrice', loadChildren: () => import('../StockPrice/StockPrice.module').then(m => m.StockPriceModule),
    data: {
        oPermission: {
            permissionId: 'StockPrice-detail-permissions'
        }
    }
},{
    path: ':stock_id/StockVolume', loadChildren: () => import('../StockVolume/StockVolume.module').then(m => m.StockVolumeModule),
    data: {
        oPermission: {
            permissionId: 'StockVolume-detail-permissions'
        }
    }
},{
    path: ':stock_id/WatchlistStock', loadChildren: () => import('../WatchlistStock/WatchlistStock.module').then(m => m.WatchlistStockModule),
    data: {
        oPermission: {
            permissionId: 'WatchlistStock-detail-permissions'
        }
    }
}
];

export const STOCK_MODULE_DECLARATIONS = [
    StockHomeComponent,
    StockNewComponent,
    StockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }