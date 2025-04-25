import { DynamicFormJson } from "./fields-model";

export class Checkbox extends DynamicFormJson<any> {
    override type = 'checkbox';
}
