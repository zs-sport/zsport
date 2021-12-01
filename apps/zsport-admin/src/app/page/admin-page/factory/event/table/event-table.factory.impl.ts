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
    EventEntity,
    EventStateService,
    I18nService,
} from '@zsport/api';
import { EventTableFactory } from '@zsport/domain/sport/event/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminEventPermissionsService } from '../../../../../permission/event';

@Injectable()
export class EventTableFactoryImpl extends EventTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.eventStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private eventStateService: EventStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'eventTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<EventEntity[]> {
        const values: Observable<EventEntity[]> = this.eventStateService.selectEntities$().pipe(
            map((events) =>
                events.map((event) => {
                    const newEvent = event;

                    return newEvent;
                })
            )
        );

        return values;
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.event.column.category'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.event.column.gender'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.event.column.age_group'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.event.column.team1'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.event.column.team2'),
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
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
                propertyName: 'category',
                isDoubleObject: true,
                objectPropertyName: 'nameI18n',
                isLocalized: true,
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'gender',
                isDoubleObject: true,
                isLocalized: true,
                objectPropertyName: 'nameI18n',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'ageGroup',
                isDoubleObject: true,
                isLocalized: true,
                objectPropertyName: 'nameI18n',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'team1',
                isDoubleObject: true,
                objectPropertyName: 'name',
                isLocalized: false,
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'team2',
                isDoubleObject: true,
                objectPropertyName: 'name',
                isLocalized: false,
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.category.action.edit'),
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
        const hasUpdateEventEntityPermission = this.authorizationService.hasPermission(
            AdminEventPermissionsService.updateEventEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateEventEntityPermission;
    }
}
