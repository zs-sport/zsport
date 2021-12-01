import { distinct, distinctUntilChanged, filter, Observable, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    Association,
    AssociationStateService,
    AuthorizationService,
    Category,
    CategoryStateService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    I18nService,
    Identifiable,
} from '@zsport/api';
import { AssociationTableFactory } from '@zsport/domain/sport/association/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminAssociationPermissionsService } from '../../../../../permission/association';

@Injectable()
export class AssociationTableFactoryImpl extends AssociationTableFactory {
    private categories: Category[] = [];
    private clickHandler = (entity: Identifiable): void => {
        this.associationStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private associationStateService: AssociationStateService,
        private authorizationService: AuthorizationService,
        private categoryStateService: CategoryStateService,
        private i18NService: I18nService
    ) {
        super();

        this.categoryStateService
            .selectEntities$()
            .pipe(
                distinct((entities) => entities.length),
                filter((entities) => !!entities),
                tap((entities) => {
                    this.categories = entities as Category[];
                })
            )
            .subscribe();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'associationTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<Identifiable[]> {
        return this.associationStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const currentLanguage = this.i18NService.getActiveLang();
        const currentLanguageAsString: string = this.i18NService.getActiveLangAsString();
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                compare: (a: Association, b: Association) =>
                    (a.nameI18n[currentLanguage] || '').localeCompare(
                        b.nameI18n[currentLanguage] || '',
                        currentLanguageAsString
                    ),
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.association.column.name'),
            },
            {
                compare: (a: Association, b: Association) =>
                    (a.shortName || '').localeCompare(b.shortName || '', currentLanguageAsString),
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.association.column.short_name'),
            },
            {
                listOfFilter: this.categories.map((category: Category) => ({
                    text: (category.nameI18n as any)[currentLanguage],
                    value: (category.nameI18n as any)[currentLanguage],
                })),
                filterFn: (type: string, item: Association) => {
                    return ((item as Association).category.nameI18n as any)[currentLanguage].indexOf(type) !== -1;
                },
                title: this.i18NService.translate('admin.sport.association.column.category'),
            },
        ];

        const editColumnHeader = {
            title: this.i18NService.translate('admin.sport.association.column.edit'),
            listOfFilter: [],
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
                propertyName: 'nameI18n',
                objectPropertyName: '',
                isObject: true,
                isLocalized: true,
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'shortName',
                objectPropertyName: '',
                isObject: false,
                isLocalized: false,
                isSimple: true,
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
            actionName: this.i18NService.translate('admin.sport.association.action.edit'),
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
        const hasUpdateAssociationEntityPermission = this.authorizationService.hasPermission(
            AdminAssociationPermissionsService.updateAssociationEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateAssociationEntityPermission;
    }
}
