import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    CategoryEntity,
    CategoryStateService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    I18nService,
    RoleNames,
} from '@zsport/api';
import { CategoryTableFactory } from '@zsport/domain/sport/category/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminCategoryPermissionsService } from '../../../../../permission/category';

@Injectable()
export class CategoryTableFactoryImpl extends CategoryTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.categoryStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private categoryStateService: CategoryStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'categoryTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<CategoryEntity[]> {
        return this.categoryStateService
            .selectEntities$()
            .pipe(map((entities) => entities.map((entity) => entity as CategoryEntity)));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.category.column.name'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.category.column.color'),
            },
        ];

        const editColumnHeader = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.sport.category.column.edit'),
        };

        if (this.hasEditEntityPermission()) {
            columnHeaders.push(editColumnHeader);
        }

        return columnHeaders;
    }

    private createColumns(): DynamicColumnModel[] {
        const columns: DynamicColumnModel[] = [
            {
                actionName: '',
                actionRoute: '',
                objectPropertyName: '',
                propertyName: 'nameI18n',
                isObject: true,
                isLocalized: true,
            },
            {
                actionName: '',
                actionRoute: '',
                isSimple: true,
                objectPropertyName: '',
                propertyName: 'color',
            },
        ];

        const editColumn = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.category.action.edit'),
            actionRoute: '../edit',
            isAction: true,
            objectPropertyName: '',
            propertyName: '',
        };

        if (this.hasEditEntityPermission()) {
            columns.push(editColumn);
        }

        return columns;
    }

    private hasEditEntityPermission(): boolean {
        const hasUpdateCategoryEntityPermission = this.authorizationService.hasPermission(
            AdminCategoryPermissionsService.updateCategoryEntity
        );

        return this.authorizationService.hasRole(RoleNames.ADMIN) || hasUpdateCategoryEntityPermission;
    }
}
