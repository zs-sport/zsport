import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    I18nService,
    TeamEntity,
    TeamStateService,
} from '@zsport/api';
import { TeamAdminPermissionsService } from '@zsport/domain/sport/team/admin';
import { TeamTableFactory } from '@zsport/domain/sport/team/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

@Injectable()
export class TeamTableFactoryImpl extends TeamTableFactory {
    private clickHandler = (entity: TeamEntity): void => {
        this.teamStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private teamStateService: TeamStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'sportTeamTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<TeamEntity[]> {
        const clubId: string = this.activatedRoute.snapshot.queryParams.clubId;

        this.teamStateService.dispatchListTeamsByClubIdAction(clubId);

        return this.teamStateService.selectEntitiesByClubId$(clubId);
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                title: this.i18NService.translate('admin.sport.team.column.age_group'),
                listOfFilter: [],
            },
            {
                title: this.i18NService.translate('admin.sport.team.column.gender'),
                listOfFilter: [],
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            title: this.i18NService.translate('admin.sport.team.column.edit'),
            listOfFilter: [],
        };

        if (this.hasEditEntityPermission()) {
            columnHeaders.push(editColumnHeader);
        }

        return columnHeaders;
    }

    private createColumns(): DynamicColumnModel[] {
        const clubId: string = this.activatedRoute.snapshot.queryParams.clubId;

        const columns: DynamicColumnModel[] = [
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
                propertyName: 'gender',
                isDoubleObject: true,
                isLocalized: true,
                objectPropertyName: 'nameI18n',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.team.action.edit'),
            actionRoute: '../edit',
            isAction: true,
            queryParams: {
                clubId,
            },
            propertyName: '',
            objectPropertyName: '',
        };

        if (this.hasEditEntityPermission()) {
            columns.push(editColumn);
        }

        return columns;
    }

    private hasEditEntityPermission(): boolean {
        const hasUpdateTeamEntityPermission = this.authorizationService.hasPermission(
            TeamAdminPermissionsService.updateTeamEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateTeamEntityPermission;
    }
}
