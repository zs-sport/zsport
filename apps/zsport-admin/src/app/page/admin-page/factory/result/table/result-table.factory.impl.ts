import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AuthorizationService, DynamicColumnHeaderModel, DynamicColumnModel, DynamicTableConfigModel,
    DynamicTableSizeEnum, Entity, I18nService, Result, ResultStateService
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
        return this.resultStateService
            .selectEntities$()
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
        const matchId: string = this.activatedRoute.snapshot.queryParams.matchId;

        const columns: DynamicColumnModel[] = [
            {
                actionName: '',
                actionRoute: '',
                isLocalized: false,
                isObject: false,
                objectPropertyName: '',
                propertyName: 'eventId',
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
                matchId,
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
