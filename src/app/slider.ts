import { DynamicFormJson } from "./fields-model";

export class Slider extends DynamicFormJson<string>{
    override type = 'range'
}