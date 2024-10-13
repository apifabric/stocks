import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MarketIndice-card.component.html',
  styleUrls: ['./MarketIndice-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MarketIndice-card]': 'true'
  }
})

export class MarketIndiceCardComponent {


}