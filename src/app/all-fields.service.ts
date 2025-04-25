import { DynamicFormJson } from './fields-model';
import { NumberType } from './numberType';
import { TextType } from './textType';
import { Dropdown } from './dropdown';
import { Slider } from './slider';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
export class AllFieldsService {
    getFields() {
        const fields: DynamicFormJson<any>[] = [

            new NumberType({
                label: 'Phone-number',
                isRequired: true,
                errorMessage: "Please enter valid phone number"
            }),

            new TextType({
                label: "firstname",
                isVisible: true,
                isRequired: true,
                errorMessage: "Please enter your name",
            }),
            new TextType({
                label: "lastname",
                isVisible: true,
                isRequired: true,
                errorMessage: "Please enter your name",
            }),
            new Dropdown({
                label: "country",
                isVisible: true,
                isRequired: true,
                errorMessage: "Please select your country",
                options: ['India', 'USA', "Japan"]
            }),
            new Slider({
                label: "height",
                isVisible: true,
                options: [160, 180, 170]
            }),

            new Checkbox({
                label: "graduated",
                isVisible: true,
                value:false
            }),
            new TextType({
                label: "new username",
                isVisible: true,
                isRequired: true,
                errorMessage: "Please enter your username",
                hint: "Hint : 8 characters with Upper case and special characters"
            }),
            new Textarea({
                label: "feedback",
                isVisible: true
            }),
        ];
        return fields
    }
}