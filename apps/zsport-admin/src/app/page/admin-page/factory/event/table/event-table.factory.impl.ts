import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    Event,
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
        return this.eventStateService.selectEntities$().pipe(
            switchMap((entities) => {
                return of({
                    columnHeaders: this.createColumnHeaders(entities as EventEntity[]),
                    id: 'eventTable',
                    size: DynamicTableSizeEnum.default,
                    columns: this.createColumns(),
                    isSortable: false,
                });
            })
        );
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

    private createColumnHeaders(events: EventEntity[]): DynamicColumnHeaderModel[] {
        const clubNamesSet: Set<string> = new Set();

        events.forEach((event) => {
            clubNamesSet.add(event.team1.club.name);
            clubNamesSet.add(event.team2.club.name);
        });

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
                compare: (a: Event, b: Event) => (a.eventDayTime < b.eventDayTime ? -1 : 1),
                listOfFilter: Array.from(clubNamesSet.values())
                    .map((clubName) => ({
                        text: clubName,
                        value: clubName,
                    }))
                    .sort((a: any, b: any) => a['value'].localeCompare(b['value'])),
                filterFn: (clubName: string, event: Event) => {
                    return event.team1.club.name === clubName || event.team2.club.name === clubName;
                },
                title: this.i18NService.translate('admin.sport.event.column.date_time'),
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
                isDate: true,
                objectPropertyName: '',
                propertyName: 'eventDayTime',
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
