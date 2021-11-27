import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    I18nService,
    PersonEntity,
    PersonStateService,
} from '@zsport/api';
import { PersonTableFactory } from '@zsport/domain/person/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminPersonPermissionsService } from '../../../../../permission/person';

@Injectable()
export class PersonTableFactoryImpl extends PersonTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.personStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private personStateService: PersonStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'personTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: true,
        });
    }

    public getData$(): Observable<PersonEntity[]> {
        return this.personStateService.selectEntities$().pipe(map((entities) => entities as PersonEntity[]));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.person.column.first_name'),
                compare: (a: PersonEntity, b: PersonEntity) =>
                    a.firstName.localeCompare(b.firstName, this.i18NService.getActiveLangAsString()),
                priority: 1,
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.person.column.last_name'),
                compare: (a: PersonEntity, b: PersonEntity) =>
                    a.lastName.localeCompare(b.lastName, this.i18NService.getActiveLangAsString()),
                priority: 1,
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.person.column.email'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.person.column.gender'),
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.person.column.edit'),
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
                propertyName: 'firstName',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                objectPropertyName: '',
                propertyName: 'lastName',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                objectPropertyName: '',
                propertyName: 'email',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'gender',
                isDoubleObject: true,
                isLocalized: true,
                objectPropertyName: 'nameI18n',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.person.action.edit'),
            actionRoute: '../edit',
            isAction: true,
            propertyName: '',
            objectPropertyName: '',
        };

        if (this.hasEditEntityPermission()) {
            columns.push(editColumn);
        }

        return columns;
    }

    private hasEditEntityPermission(): boolean {
        const hasUpdatePersonEntityPermission = this.authorizationService.hasPermission(
            AdminPersonPermissionsService.updatePersonEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdatePersonEntityPermission;
    }
}
