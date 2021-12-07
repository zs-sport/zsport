import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-result-list',
    templateUrl: './result-list.component.html',
    styleUrls: ['./result-list.component.less'],
})
export class ResultListComponent extends BaseComponent {}
