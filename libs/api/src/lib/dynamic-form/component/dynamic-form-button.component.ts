import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseComponent } from '../../base';
import { ButtonBase } from '../button';

@Component({
    template: '',
})
export abstract class DynamicFormButtonComponent extends BaseComponent {
    @Output()
    public clickEvent: EventEmitter<unknown>;
    @Input()
    public config!: ButtonBase;
    @Input()
    public disabled!: boolean;

    public constructor() {
        super();

        this.clickEvent = new EventEmitter();
    }
}
