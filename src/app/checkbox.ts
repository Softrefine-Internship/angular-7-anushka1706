import { DynamicFormJson } from "./fields-model";

export class Checkbox extends DynamicFormJson<string>{
    override type = 'checkbox'
}