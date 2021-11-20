import { ChangeDetectionStrategy, Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicPhoneElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-phone-element',
    templateUrl: './ngz-phone-element.component.html',
    styleUrls: ['./ngz-phone-element.component.less'],
})
export class NgzPhoneElementComponent extends DynamicPhoneElementComponent {
    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }
}
