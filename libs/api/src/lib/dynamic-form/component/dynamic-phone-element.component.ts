import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DynamicFormElementComponent } from './dynamic-form-element.component';

@Component({
    template: '',
})
export abstract class DynamicPhoneElementComponent extends DynamicFormElementComponent<string> {
    public constructor(ngControl: NgControl) {
        super(ngControl);
    }
}
