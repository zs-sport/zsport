import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

import { BaseComponent } from '../../base';
import { ControlBase } from '../control';

@Component({
    template: '',
})
export abstract class DynamicFormElementComponent<T> extends BaseComponent implements ControlValueAccessor {
    @Input()
    public control!: ControlBase<T>;

    public get formControl() {
        return this.ngControl.control as FormControl;
    }

    public constructor(public ngControl: NgControl) {
        super();

        this.ngControl.valueAccessor = this;
    }

    public registerOnChange(fn: any): void {}
    public registerOnTouched(fn: any): void {}
    public setDisabledState?(isDisabled: boolean): void {}
    public writeValue(obj: any): void {}
}
