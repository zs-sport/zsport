import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-result-edit',
    templateUrl: './result-edit.component.html',
    styleUrls: ['./result-edit.component.less'],
})
export class ResultEditComponent extends BaseComponent {}
