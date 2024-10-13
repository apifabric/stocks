import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockVolume-new',
  templateUrl: './StockVolume-new.component.html',
  styleUrls: ['./StockVolume-new.component.scss']
})
export class StockVolumeNewComponent {
  @ViewChild("StockVolumeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}