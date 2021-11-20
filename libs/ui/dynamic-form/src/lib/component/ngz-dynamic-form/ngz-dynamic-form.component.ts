import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlBase, DynamicFormComponent, DynamicFormValidatorNameEnum } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-dynamic-form',
    templateUrl: './ngz-dynamic-form.component.html',
    styleUrls: ['./ngz-dynamic-form.component.less'],
})
export class NgzDynamicFormComponent extends DynamicFormComponent implements OnChanges, OnInit {
    public dynamicFormGroup!: FormGroup;

    public constructor(protected formBuilder: FormBuilder, protected changeDetector: ChangeDetectorRef) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['controls'] && !changes['controls'].firstChange) {
            this.dynamicFormGroup = this.createFormGroup(changes['controls'].currentValue);
        }
    }

    public ngOnInit(): void {
        this.dynamicFormGroup = this.createFormGroup(this.controls);
    }

    protected createFormGroup(controls: ControlBase<any>[]): FormGroup {
        const formControls: any = {};

        controls.forEach((control) => {
            if (control.controls) {
                formControls[control.key || ''] = this.createFormGroup(control.controls);
            } else {
                const value = [control.value];

                if (control.validators) {
                    value.push(
                        control.validators.map((validatorKeyValue) => {
                            let validator = null;

                            switch (validatorKeyValue.key) {
                                case DynamicFormValidatorNameEnum.required:
                                    validator = Validators.required;

                                    break;

                                case DynamicFormValidatorNameEnum.email:
                                    validator = Validators.email;

                                    break;

                                case DynamicFormValidatorNameEnum.minLength:
                                    validator = Validators.minLength(validatorKeyValue.value);

                                    break;

                                case DynamicFormValidatorNameEnum.maxLength:
                                    validator = Validators.maxLength(validatorKeyValue.value);

                                    break;

                                default:
                                    break;
                            }

                            return validator;
                        })
                    );
                }

                formControls[control.key || ''] = value;
            }
        });

        return this.formBuilder.group(formControls);
    }
}
