import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockVolume-card.component.html',
  styleUrls: ['./StockVolume-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockVolume-card]': 'true'
  }
})

export class StockVolumeCardComponent {


}