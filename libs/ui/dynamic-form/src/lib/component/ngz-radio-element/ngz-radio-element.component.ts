import { ChangeDetectionStrategy, Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicRadioElementComponent, SelectOptionModel } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-radio-element',
    templateUrl: './ngz-radio-element.component.html',
    styleUrls: ['./ngz-radio-element.component.less'],
})
export class NgzRadioElementComponent extends DynamicRadioElementComponent {
    public options!: SelectOptionModel[];

    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }
}
