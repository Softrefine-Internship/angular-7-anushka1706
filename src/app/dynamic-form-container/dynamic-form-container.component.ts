import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../fieldControl.service';
import { DynamicFormJson } from '../fields-model';
@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.scss'],
  providers: [FieldControlService],
})
export class DynamicFormContainerComponent implements OnInit {
  @Input() allFormFields!: DynamicFormJson<any>[];
  form!: FormGroup;

  constructor(private formGroup: FieldControlService) { }

  ngOnInit() {
    this.form = this.formGroup.toFormGroup(this.allFormFields)
  }

  onSubmit() {
    console.log(this.form.value)
  }

  onReset() {
    this.form.reset()
  }
}
