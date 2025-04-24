import { DynamicFormJson } from "./fields-model";

export class Textarea extends DynamicFormJson<string>{
    override type = 'textarea'
}