import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'address',
  template: `
    <fieldset>
      <form [formGroup]="$any(controlContainer).control">
        <formly-form
          [form]="form"
          [fields]="fields"
          [model]="model"
          [options]="options"
        ></formly-form>
        <button type="submit" class="btn btn-default">Submit</button>
        <button type="button" (click)="onToggleDisable()">Disable</button>
        <button type="button" (click)="onToggleField()">Hello</button>
      </form>
    </fieldset>
  `,
})
export class AddressComponent {
  title = 'learnFormly';
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },

      expressions: {
        hide: (field) => {
          console.log(field);
        },
        // 'props.disabled': (field) => {
        //   console.log(field);
        //   return true;
        // },
        'props.disabled': 'formState.disabled',
      },
      validation: {
        messages: {
          required: (error: any, field: FormlyFieldConfig) => {
            console.log(field);
            return ` is not a valid IP Address`;
          },
        },
      },
    },
  ];
  constructor(public controlContainer: ControlContainer) {}
  onToggleDisable() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  onToggleField() {
    this.fields[0].hide = !this.fields[0].hide;
  }
}
