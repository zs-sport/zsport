import { ChangeDetectionStrategy, Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DynamicResetButtonComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'ngz-reset-button',
    templateUrl: './ngz-reset-button.component.html',
    styleUrls: ['./ngz-reset-button.component.less'],
})
export class NgzResetButtonComponent extends DynamicResetButtonComponent {
    public constructor() {
        super();

        this.clickEvent = new EventEmitter();
    }

    public buttonClickHandler(event: unknown): void {
        this.clickEvent.emit(event);
    }
}
