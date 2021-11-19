import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DynamicFormElementComponent } from './dynamic-form-element.component';

@Component({
    template: '',
})
export abstract class DynamicFileElementComponent extends DynamicFormElementComponent<any> {
    @Output()
    public fileEvent: EventEmitter<unknown>;

    public constructor(ngControl: NgControl) {
        super(ngControl);

        this.fileEvent = new EventEmitter();
    }
}
