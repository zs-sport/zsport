import { Injectable } from '@angular/core';
import { DynamicFormConfigFactory, FormConfig, DynamicFormLayoutEnum } from '@zsport/api';

@Injectable()
export abstract class ResultFormConfigFactory extends DynamicFormConfigFactory {
    public createFormConfig(): FormConfig {
        return {
            formControlSpan: 16,
            formLabelSpan: 8,
            layout: DynamicFormLayoutEnum.horizontal,
        };
    }
}
