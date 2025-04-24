import { DynamicFormJson } from "./fields-model";

export class NumberType extends DynamicFormJson<string>{
    override type = 'number'
}