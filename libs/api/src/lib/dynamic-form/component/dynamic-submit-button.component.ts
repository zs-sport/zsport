import { Component } from '@angular/core';

import { DynamicFormButtonComponent } from './dynamic-form-button.component';

@Component({
    template: '',
})
export abstract class DynamicSubmitButtonComponent extends DynamicFormButtonComponent {
    public constructor() {
        super();
    }
}
