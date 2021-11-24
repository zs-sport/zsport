import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryEntity, CategoryStateService } from '@zsport/api';

import * as categoryActions from './category.actions';
import * as fromCategory from './category.reducer';
import * as categorySelectors from './category.selectors';

@Injectable()
export class CategoryStateServiceImpl extends CategoryStateService {
    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }
    public constructor(private store: Store<fromCategory.CategoryPartialState>) {
        super();
    }

    public dispatchAddEntityAction(category: CategoryEntity): void {
        this.store.dispatch(categoryActions.addCategory({ category }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(categoryActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(uid: string): void {
        this.store.dispatch(categoryActions.deleteCategory({ categoryId: uid }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(categoryActions.listCategories());
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(categoryActions.loadCategory({ uid }));
    }

    public dispatchSelectCategoryAction(uid: string): void {
        this.store.dispatch(categoryActions.selectCategory({ categoryId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(categoryActions.setSelectedCategoryId({ categoryId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: CategoryEntity): void {
        this.store.dispatch(categoryActions.updateCategory({ category: entity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<CategoryEntity[]> {
        return this.store.pipe(select(categorySelectors.selectAllCategory));
    }

    public selectEntity$(uid: string): Observable<CategoryEntity | undefined> {
        return this.store.pipe(select(categorySelectors.selectCategory));
    }

    public selectEntityById$(entityId: string): Observable<CategoryEntity> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(categorySelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<CategoryEntity | undefined> {
        return this.store.pipe(select(categorySelectors.selectCategory));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(categorySelectors.getSelectedId));
    }
}
