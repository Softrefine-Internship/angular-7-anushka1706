import { DynamicFormJson } from "./fields-model";

export class Dropdown extends DynamicFormJson<string> {
    override type = 'select'
}