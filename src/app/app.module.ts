import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { AppFieldsComponent } from './dynamic-form-container/app-fields/app-fields.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormContainerComponent,
    AppFieldsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
