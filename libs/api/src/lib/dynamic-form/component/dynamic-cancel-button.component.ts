import { Component } from '@angular/core';

import { DynamicFormButtonComponent } from './dynamic-form-button.component';

@Component({
    template: '',
})
export abstract class DynamicCancelButtonComponent extends DynamicFormButtonComponent {
    public constructor() {
        super();
    }
}
