import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AnalystRating-card.component.html',
  styleUrls: ['./AnalystRating-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AnalystRating-card]': 'true'
  }
})

export class AnalystRatingCardComponent {


}