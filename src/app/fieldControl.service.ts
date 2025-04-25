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
            Validators.minLength(12),
            Validators.maxLength(12),
          ]);
          break;
        case 'checkbox':
          group[_fields.label] = new FormControl(_fields.value ?? false, validators);
          break;
        case 'dropdown':
          group[_fields.label] = new FormControl(_fields.value ?? (_fields.options[0] || null), validators);
          break;
        case 'textarea':
          group[_fields.label] = new FormControl(_fields.value ?? '', [
            ...validators,
            Validators.maxLength(500),
          ]);
          break;
        default:
          group[_fields.label] = new FormControl(_fields.value ?? null, validators);
      }
    });

    return new FormGroup(group);
  }
}