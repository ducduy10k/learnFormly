import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learnFormly';
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
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
        'props.disabled': (field) => {
          console.log(field);
          return true;
        },
      },
    },
    {
      key: 'firstname',
      type: 'custom',
    },
  ];

  constructor(private cdRef: ChangeDetectorRef) {}

  onSubmit(model: any) {
    console.log(model);
  }

  onToggleField() {
    this.fields[0].hide = !this.fields[0].hide;
  }
}