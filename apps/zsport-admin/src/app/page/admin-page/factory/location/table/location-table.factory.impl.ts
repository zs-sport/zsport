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
    LocationEntity,
    LocationStateService,
} from '@zsport/api';
import { LocationTableFactory } from '@zsport/domain/location/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminLocationPermissionsService } from '../../../../../permission/location';

@Injectable()
export class LocationTableFactoryImpl extends LocationTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.locationStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private locationStateService: LocationStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'locationTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: true,
        });
    }

    public getData$(): Observable<LocationEntity[]> {
        return this.locationStateService.selectEntities$().pipe(map((entities) => entities as LocationEntity[]));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                title: this.i18NService.translate('admin.location.column.name'),
                compare: (a: LocationEntity, b: LocationEntity) =>
                    a.name.localeCompare(b.name, this.i18NService.getActiveLangAsString()),
                priority: 1,
                listOfFilter: [],
            },
            {
                title: this.i18NService.translate('admin.location.column.type'),
                listOfFilter: [],
            },
            {
                title: this.i18NService.translate('admin.location.column.address'),
                compare: (a: LocationEntity, b: LocationEntity) =>
                    a.address.localeCompare(b.address, this.i18NService.getActiveLangAsString()),
                priority: 2,
                listOfFilter: [],
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            title: this.i18NService.translate('admin.location.column.edit'),
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
                objectPropertyName: '',
                propertyName: 'name',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                objectPropertyName: '',
                propertyName: 'type',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                objectPropertyName: '',
                propertyName: 'address',
                isObject: false,
                isLocalized: false,
                isSimple: true,
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.location.action.edit'),
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
        const hasUpdateLocationEntityPermission = this.authorizationService.hasPermission(
            AdminLocationPermissionsService.updateLocationEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateLocationEntityPermission;
    }
}
