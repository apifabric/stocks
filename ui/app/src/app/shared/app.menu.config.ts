import { MenuRootItem } from 'ontimize-web-ngx';

import { AnalystRatingCardComponent } from './AnalystRating-card/AnalystRating-card.component';

import { DividendCardComponent } from './Dividend-card/Dividend-card.component';

import { FinancialReportCardComponent } from './FinancialReport-card/FinancialReport-card.component';

import { MarketIndexComponentCardComponent } from './MarketIndexComponent-card/MarketIndexComponent-card.component';

import { MarketIndiceCardComponent } from './MarketIndice-card/MarketIndice-card.component';

import { NewsCardComponent } from './News-card/News-card.component';

import { PortfolioCardComponent } from './Portfolio-card/Portfolio-card.component';

import { PortfolioStockCardComponent } from './PortfolioStock-card/PortfolioStock-card.component';

import { StockCardComponent } from './Stock-card/Stock-card.component';

import { StockPriceCardComponent } from './StockPrice-card/StockPrice-card.component';

import { StockVolumeCardComponent } from './StockVolume-card/StockVolume-card.component';

import { WatchlistCardComponent } from './Watchlist-card/Watchlist-card.component';

import { WatchlistStockCardComponent } from './WatchlistStock-card/WatchlistStock-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'AnalystRating', name: 'ANALYSTRATING', icon: 'view_list', route: '/main/AnalystRating' }
    
        ,{ id: 'Dividend', name: 'DIVIDEND', icon: 'view_list', route: '/main/Dividend' }
    
        ,{ id: 'FinancialReport', name: 'FINANCIALREPORT', icon: 'view_list', route: '/main/FinancialReport' }
    
        ,{ id: 'MarketIndexComponent', name: 'MARKETINDEXCOMPONENT', icon: 'view_list', route: '/main/MarketIndexComponent' }
    
        ,{ id: 'MarketIndice', name: 'MARKETINDICE', icon: 'view_list', route: '/main/MarketIndice' }
    
        ,{ id: 'News', name: 'NEWS', icon: 'view_list', route: '/main/News' }
    
        ,{ id: 'Portfolio', name: 'PORTFOLIO', icon: 'view_list', route: '/main/Portfolio' }
    
        ,{ id: 'PortfolioStock', name: 'PORTFOLIOSTOCK', icon: 'view_list', route: '/main/PortfolioStock' }
    
        ,{ id: 'Stock', name: 'STOCK', icon: 'view_list', route: '/main/Stock' }
    
        ,{ id: 'StockPrice', name: 'STOCKPRICE', icon: 'view_list', route: '/main/StockPrice' }
    
        ,{ id: 'StockVolume', name: 'STOCKVOLUME', icon: 'view_list', route: '/main/StockVolume' }
    
        ,{ id: 'Watchlist', name: 'WATCHLIST', icon: 'view_list', route: '/main/Watchlist' }
    
        ,{ id: 'WatchlistStock', name: 'WATCHLISTSTOCK', icon: 'view_list', route: '/main/WatchlistStock' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AnalystRatingCardComponent

    ,DividendCardComponent

    ,FinancialReportCardComponent

    ,MarketIndexComponentCardComponent

    ,MarketIndiceCardComponent

    ,NewsCardComponent

    ,PortfolioCardComponent

    ,PortfolioStockCardComponent

    ,StockCardComponent

    ,StockPriceCardComponent

    ,StockVolumeCardComponent

    ,WatchlistCardComponent

    ,WatchlistStockCardComponent

];