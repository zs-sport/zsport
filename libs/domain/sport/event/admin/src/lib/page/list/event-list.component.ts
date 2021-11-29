import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.less'],
})
export class EventListComponent extends BaseComponent {}
