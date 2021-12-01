import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CategoryEntity, CategoryStateService } from '@zsport/api';
import { CategoryFormFactory } from '@zsport/domain/sport/category/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class CategoryFormFactoryImpl extends CategoryFormFactory {
    public constructor(private categoryStateService: CategoryStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<CategoryEntity> {
        return this.categoryStateService.selectSelectedEntity$().pipe(map((entity) => entity as CategoryEntity));
    }
}
