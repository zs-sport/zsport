import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-team-edit',
    templateUrl: './team-edit.component.html',
    styleUrls: ['./team-edit.component.less'],
})
export class TeamEditComponent extends BaseComponent {}
