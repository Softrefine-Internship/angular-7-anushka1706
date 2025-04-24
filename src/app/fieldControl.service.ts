import { Injectable, ɵresetJitOptions } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormJson } from './fields-model';
import { Validator } from '@angular/forms';
import { min } from 'rxjs';

@Injectable()
export class FieldControlService {
    toFormGroup(fields: DynamicFormJson<string>[]): any {
        const group: any = {};
        fields.forEach(_fields => {
            if (_fields.type === 'range') {
                group[_fields.label] = new FormControl(
                    _fields.options.length > 2 ? _fields.options[2] : 0,
                    _fields.isRequired
                        ? [Validators.required, Validators.min(160), Validators.max(180)]
                        : [Validators.min(+_fields.options[0]), Validators.max(+_fields.options[1])]
                );

            } else
                group[_fields.label] = _fields.isRequired ? new FormControl((_fields.value) ? _fields.value : null, Validators.required)
                    : new FormControl((_fields.value) ? _fields.value : null);
        });
        return new FormGroup(group);
    }
}