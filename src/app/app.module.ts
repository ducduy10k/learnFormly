import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CustomFieldType } from './customType.component';
import { AddressComponent } from './address.component';
@NgModule({
  declarations: [AppComponent, CustomFieldType, AddressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'custom', component: CustomFieldType }],
    }),
    FormlyPrimeNGModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
