import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-event-edit-details',
    templateUrl: './event-edit-details.component.html',
    styleUrls: ['./event-edit-details.component.less'],
})
export class EventEditDetailsComponent extends BaseComponent {}
