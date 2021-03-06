import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    I18nService,
    RoleNames,
    UserEntity,
    UserStateService,
} from '@zsport/api';
import { UserTableFactory } from '@zsport/domain/user/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { ZsportAdminAdminUserPermissionsService } from '../../../../../permission/user';

@Injectable()
export class ZsportAdminUserTableFactoryImpl extends UserTableFactory {
    private clickHandler = (entity: UserEntity): void => {
        this.userStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18nService: I18nService,
        private userStateService: UserStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'userTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<UserEntity[]> {
        return this.userStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                title: this.i18nService.translate('admin.user.column.display_name'),
                listOfFilter: [],
            },
            {
                title: this.i18nService.translate('admin.user.column.email'),
                listOfFilter: [],
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            title: this.i18nService.translate('admin.user.column.action'),
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
                propertyName: 'displayName',
            },
            {
                actionName: '',
                actionRoute: '',
                isSimple: true,
                objectPropertyName: '',
                propertyName: 'email',
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18nService.translate('admin.user.action.edit'),
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
        const hasUpdateUserEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminUserPermissionsService.updateUserEntity
        );

        return this.authorizationService.hasRole(RoleNames.ADMIN) || hasUpdateUserEntityPermission;
    }
}
