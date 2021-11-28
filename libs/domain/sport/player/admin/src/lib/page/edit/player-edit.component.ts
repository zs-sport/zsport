import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-player-edit',
    templateUrl: './player-edit.component.html',
    styleUrls: ['./player-edit.component.less'],
})
export class PlayerEditComponent extends BaseComponent {}
