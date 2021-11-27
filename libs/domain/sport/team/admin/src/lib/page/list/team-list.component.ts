import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.less'],
})
export class TeamListComponent extends BaseComponent {}
