import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DoubleNumber } from '../model';
import { DynamicFormElementComponent } from './dynamic-form-element.component';

@Component({
    template: '',
})
export abstract class DynamicDoubleNumberElementComponent extends DynamicFormElementComponent<DoubleNumber> {
    public constructor(ngControl: NgControl) {
        super(ngControl);
    }
}
