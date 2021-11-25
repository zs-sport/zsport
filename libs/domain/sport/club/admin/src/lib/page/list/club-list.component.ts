import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-club-list',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.less'],
})
export class ClubListComponent extends BaseComponent {}
