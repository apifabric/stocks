import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'AnalystRating', loadChildren: () => import('./AnalystRating/AnalystRating.module').then(m => m.AnalystRatingModule) },
    
        { path: 'Dividend', loadChildren: () => import('./Dividend/Dividend.module').then(m => m.DividendModule) },
    
        { path: 'FinancialReport', loadChildren: () => import('./FinancialReport/FinancialReport.module').then(m => m.FinancialReportModule) },
    
        { path: 'MarketIndexComponent', loadChildren: () => import('./MarketIndexComponent/MarketIndexComponent.module').then(m => m.MarketIndexComponentModule) },
    
        { path: 'MarketIndice', loadChildren: () => import('./MarketIndice/MarketIndice.module').then(m => m.MarketIndiceModule) },
    
        { path: 'News', loadChildren: () => import('./News/News.module').then(m => m.NewsModule) },
    
        { path: 'Portfolio', loadChildren: () => import('./Portfolio/Portfolio.module').then(m => m.PortfolioModule) },
    
        { path: 'PortfolioStock', loadChildren: () => import('./PortfolioStock/PortfolioStock.module').then(m => m.PortfolioStockModule) },
    
        { path: 'Stock', loadChildren: () => import('./Stock/Stock.module').then(m => m.StockModule) },
    
        { path: 'StockPrice', loadChildren: () => import('./StockPrice/StockPrice.module').then(m => m.StockPriceModule) },
    
        { path: 'StockVolume', loadChildren: () => import('./StockVolume/StockVolume.module').then(m => m.StockVolumeModule) },
    
        { path: 'Watchlist', loadChildren: () => import('./Watchlist/Watchlist.module').then(m => m.WatchlistModule) },
    
        { path: 'WatchlistStock', loadChildren: () => import('./WatchlistStock/WatchlistStock.module').then(m => m.WatchlistStockModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }