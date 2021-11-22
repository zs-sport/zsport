import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.less'],
})
export class RoleListComponent extends BaseComponent {}
