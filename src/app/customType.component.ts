import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <h3>Custom type</h3>
    <input
      type="input"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
})
export class CustomFieldType extends FieldType<FieldTypeConfig> {}
