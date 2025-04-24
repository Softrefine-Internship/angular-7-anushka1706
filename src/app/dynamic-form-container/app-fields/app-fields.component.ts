import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormJson } from 'src/app/fields-model';
@Component({
  selector: 'app-app-fields',
  templateUrl: './app-fields.component.html',
  styleUrls: ['./app-fields.component.scss']
})
export class AppFieldsComponent {
  @Input() fields !: any
  @Input() form !: FormGroup
}
