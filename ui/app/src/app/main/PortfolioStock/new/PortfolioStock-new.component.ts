import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PortfolioStock-new',
  templateUrl: './PortfolioStock-new.component.html',
  styleUrls: ['./PortfolioStock-new.component.scss']
})
export class PortfolioStockNewComponent {
  @ViewChild("PortfolioStockForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}