import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.less'],
})
export class PersonEditComponent extends BaseComponent {}
