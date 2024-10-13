import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FinancialReport-card.component.html',
  styleUrls: ['./FinancialReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FinancialReport-card]': 'true'
  }
})

export class FinancialReportCardComponent {


}