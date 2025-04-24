import { Component, Input, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldControlService } from '../fieldControl.service';
import { DynamicFormJson } from '../fields-model';
import { AppFieldsComponent } from "./app-fields/app-fields.component";
@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.scss'],
  providers: [FieldControlService],
})
export class DynamicFormContainerComponent implements OnInit {
  @Input() allFormFields!: DynamicFormJson<string>[];
  form!: FormGroup;
  constructor(private formGroup: FieldControlService) { }
  ngOnInit() {
    this.form = this.formGroup.toFormGroup(this.allFormFields)
    console.log(this.form)
  }
  onSubmit(){
    console.log(this.form)
  }
}
