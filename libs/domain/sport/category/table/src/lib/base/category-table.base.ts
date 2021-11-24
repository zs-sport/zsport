import { Observable } from 'rxjs';

import { CategoryEntity, DynamicTableConfigModel, EntityBaseComponent } from '@zsport/api';

export abstract class CategoryTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<CategoryEntity[]>;
}
