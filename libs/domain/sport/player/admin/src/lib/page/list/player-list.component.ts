import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.less'],
})
export class PlayerListComponent extends BaseComponent {}
