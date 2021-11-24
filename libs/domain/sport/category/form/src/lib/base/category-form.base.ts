import { Observable } from 'rxjs';

import { CategoryEntity, EntityBaseComponent } from '@zsport/api';

export abstract class CategoryFormBase extends EntityBaseComponent {
    public category$!: Observable<CategoryEntity>;

    public constructor() {
        super();
    }
}
