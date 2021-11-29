import { Injectable } from '@angular/core';
import { DynamicFormConfigFactory, DynamicFormLayoutEnum, FormConfig } from '@zsport/api';

@Injectable()
export abstract class EventCompetitionFormConfigFactory extends DynamicFormConfigFactory {
    public createFormConfig(): FormConfig {
        return {
            formControlSpan: 16,
            formLabelSpan: 8,
            layout: DynamicFormLayoutEnum.horizontal,
        };
    }
}
