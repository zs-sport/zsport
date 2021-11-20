import { ChangeDetectionStrategy, Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicEmailElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-email-element',
    templateUrl: './ngz-email-element.component.html',
    styleUrls: ['./ngz-email-element.component.less'],
})
export class NgzEmailElementComponent extends DynamicEmailElementComponent {
    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }
}
