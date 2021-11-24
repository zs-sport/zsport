import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.less'],
})
export class CategoryListComponent extends BaseComponent {}
