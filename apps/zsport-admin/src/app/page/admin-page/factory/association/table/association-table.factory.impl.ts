import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AssociationStateService,
    AuthorizationService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    I18nService,
    Identifiable,
} from '@zsport/api';
import { AssociationTableFactory } from '@zsport/domain/sport/association/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminAssociationPermissionsService } from '../../../../../permission/association';

@Injectable()
export class AssociationTableFactoryImpl extends AssociationTableFactory {
    private clickHandler = (entity: Identifiable): void => {
        this.sportAssociationStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private sportAssociationStateService: AssociationStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'associationTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<Identifiable[]> {
        return this.sportAssociationStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                title: this.i18NService.translate('admin.sport.association.column.name'),
                listOfFilter: [],
            },
        ];

        const editColumnHeader = {
            title: this.i18NService.translate('admin.sport.association.column.edit'),
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
                propertyName: 'nameI18n',
                objectPropertyName: '',
                isObject: true,
                isLocalized: true,
            },
        ];

        const editColumn: DynamicColumnModel = {
            actionHandler: this.clickHandler,
            actionName: this.i18NService.translate('admin.sport.association.action.edit'),
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
        const hasUpdateAssociationEntityPermission = this.authorizationService.hasPermission(
            AdminAssociationPermissionsService.updateAssociationEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateAssociationEntityPermission;
    }
}
