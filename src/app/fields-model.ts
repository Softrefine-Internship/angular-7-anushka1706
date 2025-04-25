export class DynamicFormJson<T> {
  type: string;
  label: string;
  isVisible: boolean;
  isRequired: boolean;
  errorMessage: string;
  hint: string;
  value!: string | boolean | number;
  options: (string | boolean | number)[];

  constructor(options: {
    type?: string;
    label?: string;
    isVisible?: boolean;
    isRequired?: boolean;
    errorMessage?: string;
    hint?: string;
    value?: string | boolean | number;
    options?: (string | boolean | number)[];
  } = {}) {
    this.type = options.type ?? '';
    this.label = options.label ?? '';
    this.isVisible = options.isVisible ?? true;
    this.isRequired = options.isRequired ?? false;
    this.errorMessage = options.errorMessage ?? '';
    this.hint = options.hint ?? '';
    this.value = options.value ?? ''
    this.options = options.options ?? [];
  }
}
