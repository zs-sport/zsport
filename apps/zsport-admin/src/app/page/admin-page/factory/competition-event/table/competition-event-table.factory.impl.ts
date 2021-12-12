import { Observable, of } from 'rxjs';

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
} from '@zsport/api';
import { EventTableFactory } from '@zsport/domain/sport/event/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminCompetitionEventPermissionsService } from '../../../../../permission/competition-event';

@Injectable()
export class CompetitionEventTableFactoryImpl extends EventTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.eventStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(private authorizationService: AuthorizationService, private eventStateService: EventStateService) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'competitionEventTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<EventEntity[]> {
        return this.eventStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        return [];
    }

    private createColumns(): DynamicColumnModel[] {
        return [];
    }

    private hasEditEntityPermission(): boolean {
        const hasUpdateCompetitionEventEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionEventPermissionsService.updateEventEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateCompetitionEventEntityPermission;
    }
}
