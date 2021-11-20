import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { DynamicCancelButtonComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-cancel-button',
    templateUrl: './ngz-cancel-button.component.html',
    styleUrls: ['./ngz-cancel-button.component.less'],
})
export class NgzCancelButtonComponent extends DynamicCancelButtonComponent {
    public constructor() {
        super();

        this.clickEvent = new EventEmitter();
    }

    public buttonClickHandler(event: any): void {
        this.clickEvent.emit();
    }
}
