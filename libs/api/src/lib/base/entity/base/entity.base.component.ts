import { Observable, Subject } from 'rxjs';

import { Component } from '@angular/core';

import { BaseComponent } from '../../component';

@Component({
    template: '',
})
export abstract class EntityBaseComponent extends BaseComponent {
    public dynamicComponent$!: Observable<any>;
    public dynamicInputs$$!: Subject<any>;
    public dynamicOutputs$!: Observable<unknown>;

    public constructor() {
        super();
    }
}
