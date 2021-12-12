import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    I18nService,
    Result,
    ResultStateService,
} from '@zsport/api';
import { ResultAdminPermissionsService } from '@zsport/domain/sport/result/admin';
import { ResultTableFactory } from '@zsport/domain/sport/result/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

@Injectable()
export class ResultTableFactoryImpl extends ResultTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.resultStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private resultStateService: ResultStateService
    ) {
        super();
    }

    protected findParam(paramName: string, snapshots: ActivatedRouteSnapshot[]): string | null {
        return snapshots ? snapshots.map((snapshot) => snapshot.params[paramName]).find((param) => !!param) : null;
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'resultTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<Result[]> {
        const eventId: string | null = this.activatedRoute.snapshot.queryParams['eventId'];

        return this.resultStateService
            .selectResultsByEventId$(eventId || '')
            .pipe(map((entities) => entities.map((entity) => entity as Result)));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.result.column.event_id'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.result.column.creator_id'),
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.sport.result.column.edit'),
        };

        if (this.hasEditEntityPermission()) {
            columnHeaders.push(editColumnHeader);
        }

        return columnHeaders;
    }

    private createColumns(): DynamicColumnModel[] {
        const eventId: string | null = this.activatedRoute.snapshot.queryParams['eventId'];

        const columns: DynamicColumnModel[] = [
            {
                actionName: '',
                actionRoute: '',
                isLocalized: false,
                isObject: false,
                objectPropertyName: '',
                propertyName: 'eventId',
                isSimple: true,
            },
            {
                actionName: '',
                actionRoute: '',
                isLocalized: false,
                isObject: false,
                objectPropertyName: '',
                propertyName: 'creatorId',
                isSimple: true,
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.result.action.edit'),
            actionRoute: '../edit',
            isAction: true,
            objectPropertyName: '',
            propertyName: '',
            queryParams: {
                eventId,
            },
        };

        if (this.hasEditEntityPermission()) {
            columns.push(editColumn);
        }

        return columns;
    }

    private hasEditEntityPermission(): boolean {
        const hasUpdateResultEntityPermission = this.authorizationService.hasPermission(
            ResultAdminPermissionsService.updateResultEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateResultEntityPermission;
    }
}
