import { DynamicFormJson } from './fields-model';
import { NumberType } from './numberType';
import { TextType } from './textType';
import { Dropdown } from './dropdown';
import { Slider } from './slider';
export class AllFieldsService {
    getFields() {
        const fields: DynamicFormJson<string>[] = [

            new NumberType({
                label: 'Phonenumber',
                isRequired: true,
                errorMessage: "Please enter you phone number",
                hint: "no hint"
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
            })
            // new Slider({
            //     label: "height",
            //     isVisible: true,
            //     isRequired: true,
            //     errorMessage: "Please select your country",
            //     options: ['160','180']
            // })
        ];
        return fields
    }
}