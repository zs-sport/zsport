import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryDataService, CategoryEntity, CategoryModel, CategoryUtilService } from '@zsport/api';

import * as categoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
    public addCategory = createEffect(() =>
        this.actions$.pipe(
            ofType(categoryActions.addCategory),
            switchMap((action) =>
                this.categoryDataService
                    .add$(this.categoryUtilService.convertEntityToModel(action.category, true))
                    .pipe(
                        map((category) => {
                            return categoryActions.addCategorySuccess({
                                category: this.categoryUtilService.convertModelToEntity(
                                    category as CategoryModel
                                ) as CategoryEntity,
                            });
                        })
                    )
            )
        )
    );
    public listCategories = createEffect(() =>
        this.actions$.pipe(
            ofType(categoryActions.listCategories),
            switchMap((action) =>
                this.categoryDataService.list$().pipe(
                    map((categories) => {
                        return categoryActions.listCategoriesSuccess({
                            categories: categories as CategoryEntity[],
                        });
                    })
                )
            )
        )
    );
    public loadCategory = createEffect(() =>
        this.actions$.pipe(
            ofType(categoryActions.loadCategory),
            switchMap((action) =>
                this.categoryDataService.load$(action.uid).pipe(
                    map((category) => {
                        return categoryActions.loadCategorySuccess({
                            category: this.categoryUtilService.convertModelToEntity(
                                category as CategoryModel
                            ) as CategoryEntity,
                        });
                    }),
                    catchError((error) => {
                        return of(categoryActions.loadCategoryFail(error));
                    })
                )
            )
        )
    );
    public updateCategory = createEffect(() =>
        this.actions$.pipe(
            ofType(categoryActions.updateCategory),
            switchMap((action) =>
                this.categoryDataService
                    .update$(this.categoryUtilService.convertEntityToModel(action.category, true))
                    .pipe(
                        map((category) => {
                            return categoryActions.updateCategorySuccess({
                                category: { id: category.uid || '', changes: category as CategoryModel },
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private categoryDataService: CategoryDataService,
        private categoryUtilService: CategoryUtilService
    ) {}
}
