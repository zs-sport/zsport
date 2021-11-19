import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../base';
import { DynamicTableConfigModel } from '../model';

@Component({
    template: '',
})
export abstract class DynamicTableComponent extends BaseComponent {
    @Input()
    public config!: DynamicTableConfigModel;
    public currentLanguage!: string;
    @Input()
    public data!: any[];
    public expandSet = new Set<string>();

    public constructor() {
        super();
    }

    public onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id);
        } else {
            this.expandSet.delete(id);
        }
    }
}
