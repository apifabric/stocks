import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MarketIndexComponent-card.component.html',
  styleUrls: ['./MarketIndexComponent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MarketIndexComponent-card]': 'true'
  }
})

export class MarketIndexComponentCardComponent {


}