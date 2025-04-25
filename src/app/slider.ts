import { DynamicFormJson } from "./fields-model";

export class Slider extends DynamicFormJson<any>{
    override type = 'range'
}