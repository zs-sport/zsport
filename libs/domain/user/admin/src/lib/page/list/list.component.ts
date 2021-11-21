import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
})
export class ListComponent extends BaseComponent {}
