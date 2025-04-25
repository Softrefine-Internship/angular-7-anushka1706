import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormJson } from './fields-model';

export class FieldControlService {
  toFormGroup(fields: DynamicFormJson<any>[]): FormGroup {
    const group: any = {};
    
    fields.forEach(_fields => {
      if (_fields.type === 'range') {
        const defaultValue = _fields.options[2] ?? _fields.options[0];
        group[_fields.label] = new FormControl(
          defaultValue,
          _fields.isRequired ? [Validators.required] : []
        );
      }
      else if (_fields.type === 'number') {
        group[_fields.label] = _fields.isRequired ? new FormControl((_fields.value) ? _fields.value : null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)])
          : new FormControl((_fields.value) ? _fields.value : null);
      }
      else
        group[_fields.label] = _fields.isRequired ? new FormControl((_fields.value) ? _fields.value : null, Validators.required)
          : new FormControl((_fields.value) ? _fields.value : null);
    });
    return new FormGroup(group);
  }
}