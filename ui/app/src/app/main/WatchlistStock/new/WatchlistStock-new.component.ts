import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WatchlistStock-new',
  templateUrl: './WatchlistStock-new.component.html',
  styleUrls: ['./WatchlistStock-new.component.scss']
})
export class WatchlistStockNewComponent {
  @ViewChild("WatchlistStockForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}