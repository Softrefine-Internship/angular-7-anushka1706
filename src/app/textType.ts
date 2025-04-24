import { DynamicFormJson } from "./fields-model";

export class TextType extends DynamicFormJson<string>{
    override type = 'text'
}