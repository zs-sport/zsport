import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { CategoryEntity, DynamicTableFactory } from '@zsport/api';

@Injectable()
export abstract class CategoryTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<CategoryEntity[]>;
    public abstract getTableComponent(): any;
}
