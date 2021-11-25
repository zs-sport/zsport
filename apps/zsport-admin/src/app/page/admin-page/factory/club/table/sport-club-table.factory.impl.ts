import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    Category,
    CategoryEntity,
    CategoryStateService,
    Club,
    ClubEntity,
    ClubStateService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    I18nService,
} from '@zsport/api';
import { ClubTableFactory } from '@zsport/domain/sport/club/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminClubPermissionsService } from '../../../../../permission/club';

@Injectable()
export class ClubTableFactoryImpl extends ClubTableFactory {
    private clickHandler = (entity: ClubEntity): void => {
        this.sportClubStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private sportClubStateService: ClubStateService,
        private sportCategoryStateService: CategoryStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return this.sportCategoryStateService.selectEntities$().pipe(
            switchMap((entities) => {
                return of({
                    columnHeaders: this.createColumnHeaders(entities as CategoryEntity[]),
                    columns: this.createColumns(),
                    id: 'clubTable',
                    isSortable: true,
                    size: DynamicTableSizeEnum.default,
                });
            })
        );
    }

    public getData$(): Observable<ClubEntity[]> {
        return this.sportClubStateService.selectEntities$().pipe(map((entities) => entities as ClubEntity[]));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(categories: Category[]): DynamicColumnHeaderModel[] {
        const curentLanguage: string = this.i18NService.getActiveLangAsString();

        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.club.column.name'),
                compare: (a: Club, b: Club) => a.name.localeCompare(b.name, this.i18NService.getActiveLangAsString()),
                priority: 3,
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.club.column.association'),
            },
            {
                title: this.i18NService.translate('admin.sport.club.column.category'),
                filterMultiple: true,
                listOfFilter: categories.map((category) => {
                    const categoryName: any = category.nameI18n;

                    return {
                        text: categoryName[curentLanguage] as string,
                        value: categoryName[curentLanguage],
                    };
                }),
                compare: (a: Club, b: Club) => {
                    const aName: any = a.category.nameI18n;
                    const bName: any = b.category.nameI18n;

                    return aName[curentLanguage].localeCompare(bName[curentLanguage], curentLanguage);
                },
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.sport.club.column.edit'),
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
                propertyName: 'name',
                isObject: false,
                isLocalized: false,
                isSimple: true,
                objectPropertyName: '',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'association',
                isDoubleObject: true,
                objectPropertyName: 'nameI18n',
                isLocalized: true,
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'category',
                isLocalized: true,
                isDoubleObject: true,
                objectPropertyName: 'nameI18n',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.club.action.edit'),
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
        const hasUpdateClubEntityPermission = this.authorizationService.hasPermission(
            AdminClubPermissionsService.updateClubEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateClubEntityPermission;
    }
}
