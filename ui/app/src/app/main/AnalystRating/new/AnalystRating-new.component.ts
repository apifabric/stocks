import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AnalystRating-new',
  templateUrl: './AnalystRating-new.component.html',
  styleUrls: ['./AnalystRating-new.component.scss']
})
export class AnalystRatingNewComponent {
  @ViewChild("AnalystRatingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}