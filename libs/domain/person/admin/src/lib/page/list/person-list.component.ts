import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.less'],
})
export class PersonListComponent extends BaseComponent {}
