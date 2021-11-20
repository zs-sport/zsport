import { ChangeDetectionStrategy, Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicHiddenElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-hidden-element',
    templateUrl: './ngz-hidden-element.component.html',
    styleUrls: ['./ngz-hidden-element.component.less'],
})
export class NgzHiddenElementComponent extends DynamicHiddenElementComponent {
    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }
}
