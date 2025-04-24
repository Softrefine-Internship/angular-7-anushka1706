import { Component } from '@angular/core';
import { AllFieldsService } from './all-fields.service';
import { DynamicFormJson } from './fields-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AllFieldsService]
})
export class AppComponent {
  allFormFields !: DynamicFormJson<string>[]
  constructor(private fieldService: AllFieldsService) {
    this.allFormFields = this.fieldService.getFields()
    console.log(this.allFormFields)
  }
}
