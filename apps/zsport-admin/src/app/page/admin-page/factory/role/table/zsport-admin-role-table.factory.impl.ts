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
    RoleEntity,
    RoleNames,
    RoleStateService,
} from '@zsport/api';
import { RoleTableFactory } from '@zsport/domain/role/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { ZsportAdminAdminRolePermissionsService } from '../../../../../permission/role';

@Injectable()
export class ZsportAdminRoleTableFactoryImpl extends RoleTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.roleStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18nService: I18nService,
        private roleStateService: RoleStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'roleTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<RoleEntity[]> {
        return this.roleStateService.selectEntities$().pipe(map((entities) => entities as RoleEntity[]));
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                title: this.i18nService.translate('admin.role.column.name'),
                listOfFilter: [],
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            title: this.i18nService.translate('admin.role.column.edit'),
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
                isSimple: true,
                objectPropertyName: '',
                propertyName: 'name',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18nService.translate('admin.role.action.edit'),
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
        const hasUpdateRoleEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminRolePermissionsService.updateRoleEntity
        );

        return this.authorizationService.hasRole(RoleNames.ADMIN) || hasUpdateRoleEntityPermission;
    }
}
