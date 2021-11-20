import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { DynamicSubmitButtonComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-submit-button',
    templateUrl: './ngz-submit-button.component.html',
    styleUrls: ['./ngz-submit-button.component.less'],
})
export class NgzSubmitButtonComponent extends DynamicSubmitButtonComponent {
    public constructor() {
        super();

        this.clickEvent = new EventEmitter();
    }

    public buttonClickHandler(event: unknown): void {
        this.clickEvent.emit(event);
    }
}
