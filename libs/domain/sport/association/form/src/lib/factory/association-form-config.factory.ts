import { Injectable } from '@angular/core';
import { DynamicFormConfigFactory, DynamicFormLayoutEnum, FormConfig } from '@zsport/api';

@Injectable()
export abstract class AssociationFormConfigFactory extends DynamicFormConfigFactory {
    public createFormConfig(): FormConfig {
        return {
            formControlSpan: 16,
            formLabelSpan: 8,
            layout: DynamicFormLayoutEnum.horizontal,
        };
    }
}
