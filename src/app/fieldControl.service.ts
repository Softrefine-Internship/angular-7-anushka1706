import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormJson } from './fields-model';

export class FieldControlService {
  toFormGroup(fields: DynamicFormJson<any>[]): FormGroup {
    const group: any = {};

    fields.forEach(_fields => {
      const validators = _fields.isRequired ? [Validators.required] : [];

      switch (_fields.type) {
        case 'range':
          const defaultSliderValue = _fields.options.length >= 3 ? _fields.options[2] : _fields.options[0] ?? 0;
          group[_fields.label] = new FormControl(defaultSliderValue, validators);
          break;
        case 'number':
          group[_fields.label] = new FormControl(_fields.value ?? null, [
            ...validators,
            Validators.minLength(10),
            Validators.maxLength(12),
          ]);
          break;
        case 'checkbox':
          group[_fields.label] = _fields.isRequired ? new FormControl(false, Validators.requiredTrue) : new FormControl(false, []);
          break;
        default:
          group[_fields.label] = _fields.isRequired ? new FormControl((_fields.value) ? _fields.value : null, Validators.required)
            : new FormControl((_fields.value) ? _fields.value : null);
      }
    });

    return new FormGroup(group);
  }
}