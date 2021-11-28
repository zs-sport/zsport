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
    PlayerEntity,
    PlayerStateService,
} from '@zsport/api';
import { PlayerAdminPermissionsService } from '@zsport/domain/sport/player/admin';
import { PlayerTableFactory } from '@zsport/domain/sport/player/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

@Injectable()
export class PlayerTableFactoryImpl extends PlayerTableFactory {
    private clickHandler = (entity: PlayerEntity): void => {
        this.playerStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private playerStateService: PlayerStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'playerTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<PlayerEntity[]> {
        const clubId: string = this.activatedRoute.snapshot.queryParams.clubId;

        this.playerStateService.dispatchListPlayersByClubIdAction(clubId);

        return this.playerStateService.selectEntitiesByClubId$(clubId);
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.player.column.first_name'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.player.column.last_name'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.player.column.number'),
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.sport.player.column.edit'),
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
                propertyName: 'person',
                isObject: true,
                isLocalized: false,
                objectPropertyName: 'firstName',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'person',
                isObject: true,
                isLocalized: false,
                objectPropertyName: 'lastName',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'number',
                isObject: false,
                isLocalized: false,
                isSimple: true,
                objectPropertyName: '',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.player.action.edit'),
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
        const hasUpdatePlayerEntityPermission = this.authorizationService.hasPermission(
            PlayerAdminPermissionsService.updatePlayerEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdatePlayerEntityPermission;
    }
}
