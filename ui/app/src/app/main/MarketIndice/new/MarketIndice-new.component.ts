import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MarketIndice-new',
  templateUrl: './MarketIndice-new.component.html',
  styleUrls: ['./MarketIndice-new.component.scss']
})
export class MarketIndiceNewComponent {
  @ViewChild("MarketIndiceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}