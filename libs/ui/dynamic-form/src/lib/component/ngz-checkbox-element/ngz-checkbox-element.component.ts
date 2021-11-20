import { ChangeDetectionStrategy, Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicCheckboxElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-checkbox-element',
    templateUrl: './ngz-checkbox-element.component.html',
    styleUrls: ['./ngz-checkbox-element.component.less'],
})
export class NgzCheckboxElementComponent extends DynamicCheckboxElementComponent {
    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }
}
