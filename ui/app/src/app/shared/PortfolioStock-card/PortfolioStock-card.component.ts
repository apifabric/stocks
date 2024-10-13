import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PortfolioStock-card.component.html',
  styleUrls: ['./PortfolioStock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PortfolioStock-card]': 'true'
  }
})

export class PortfolioStockCardComponent {


}