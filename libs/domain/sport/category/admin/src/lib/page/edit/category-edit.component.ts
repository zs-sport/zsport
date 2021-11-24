import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.less'],
})
export class CategoryEditComponent extends BaseComponent {}
