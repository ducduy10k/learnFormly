import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learnFormly';
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  formData = this.fb.group({
    address: this.fb.group({
      email: '',
    }),
  });

  constructor(private cdRef: ChangeDetectorRef, private fb: FormBuilder) {}

  onSubmit(model: any) {
    console.log(model);
  }
}
