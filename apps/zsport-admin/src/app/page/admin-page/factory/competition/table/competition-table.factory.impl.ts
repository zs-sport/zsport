import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    Championship,
    Competition,
    CompetitionStateService,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    GenderUtilService,
    I18nService,
} from '@zsport/api';
import { CompetitionTableFactory } from '@zsport/domain/sport/competition/table';
import { NgzDynamicTableComponent } from '@zsport/ui/dynamic-table';

import { AdminCompetitionPermissionsService } from '../../../../../permission/competition';

@Injectable()
export class CompetitionTableFactoryImpl extends CompetitionTableFactory {
    private clickHandler = (entity: Entity): void => {
        this.competitionStateService.dispatchSetSelectedEntityIdAction(entity.uid || '');
    };

    constructor(
        private authorizationService: AuthorizationService,
        private genderUtilService: GenderUtilService,
        private i18NService: I18nService,
        private competitionStateService: CompetitionStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return of({
            id: 'competitionTable',
            size: DynamicTableSizeEnum.default,
            columnHeaders: this.createColumnHeaders(),
            columns: this.createColumns(),
            isSortable: false,
        });
    }

    public getData$(): Observable<Entity[]> {
        return this.competitionStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(): DynamicColumnHeaderModel[] {
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.competition.column.name'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.competition.column.category'),
            },
            {
                listOfFilter: [],
                title: this.i18NService.translate('admin.sport.competition.column.type'),
            },
            {
                title: this.i18NService.translate('admin.sport.competition.column.gender'),
                filterMultiple: true,
                listOfFilter: this.genderUtilService.getGenders().map((gender) => ({
                    text: gender.nameI18n[this.i18NService.getActiveLang()] as string,
                    value: gender.nameI18n[this.i18NService.getActiveLang()],
                })),
                filterFn: (list: string[], item: Competition) =>
                    list.some(
                        (genderName) =>
                            (
                                (item as Championship).gender.nameI18n[this.i18NService.getActiveLang()] as string
                            ).indexOf(genderName) !== -1
                    ),
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18NService.translate('admin.sport.sport_category.column.edit'),
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
                propertyName: 'name',
                isObject: false,
                isLocalized: false,
                isSimple: true,
                objectPropertyName: '',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'category',
                isLocalized: true,
                isDoubleObject: true,
                objectPropertyName: 'nameI18n',
            },
            {
                actionName: '',
                actionRoute: '',
                propertyName: 'type',
                isObject: false,
                isLocalized: false,
                isSimple: true,
                objectPropertyName: '',
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
            actionName: this.i18NService.translate('admin.sport.sport_category.action.edit'),
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
        const hasUpdateCompetitionEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionPermissionsService.updateCompetitionEntity
        );

        return this.authorizationService.hasRole('ADMIN') || hasUpdateCompetitionEntityPermission;
    }
}
