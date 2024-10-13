import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WatchlistStock-card.component.html',
  styleUrls: ['./WatchlistStock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WatchlistStock-card]': 'true'
  }
})

export class WatchlistStockCardComponent {


}