import { Observable, of, switchMap } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    Category,
    CategoryEntity,
    CategoryStateService,
    Championship,
    Competition,
    CompetitionStateService,
    CompetitionTypeEnum,
    DynamicColumnHeaderModel,
    DynamicColumnModel,
    DynamicTableConfigModel,
    DynamicTableSizeEnum,
    Entity,
    GenderUtilService,
    I18nService,
    Tournament,
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
        private categoryStateService: CategoryStateService,
        private genderUtilService: GenderUtilService,
        private i18nService: I18nService,
        private competitionStateService: CompetitionStateService
    ) {
        super();
    }

    public createTableConfig$(): Observable<DynamicTableConfigModel> {
        return this.categoryStateService.selectEntities$().pipe(
            switchMap((entities) => {
                return of({
                    columnHeaders: this.createColumnHeaders(entities as CategoryEntity[]),
                    columns: this.createColumns(),
                    id: 'competitionTable',
                    isSortable: true,
                    size: DynamicTableSizeEnum.default,
                });
            })
        );
    }

    public getData$(): Observable<Entity[]> {
        return this.competitionStateService.selectEntities$();
    }

    public getTableComponent(): any {
        return NgzDynamicTableComponent;
    }

    private createColumnHeaders(categories: CategoryEntity[]): DynamicColumnHeaderModel[] {
        const curentLanguage: string = this.i18nService.getActiveLangAsString();
        const columnHeaders: DynamicColumnHeaderModel[] = [
            {
                compare: (a: Competition, b: Competition) => {
                    return a.name.localeCompare(b.name, curentLanguage);
                },
                listOfFilter: [],
                title: this.i18nService.translate('admin.sport.competition.column.name'),
            },
            {
                filterMultiple: true,
                title: this.i18nService.translate('admin.sport.competition.column.category'),
                listOfFilter: categories.map((category) => {
                    const categoryName: any = category.nameI18n;

                    return {
                        text: categoryName[curentLanguage] as string,
                        value: category.uid,
                    };
                }),
                filterFn: (categoryIds: string[], item: Competition) => {
                    return categoryIds.some((categoryId) => item.category.uid === categoryId);
                },
                compare: (a: Competition, b: Competition) => {
                    const aName: any = a.category.nameI18n;
                    const bName: any = b.category.nameI18n;

                    return aName[curentLanguage].localeCompare(bName[curentLanguage], curentLanguage);
                },
            },
            {
                listOfFilter: [],
                title: this.i18nService.translate('admin.sport.competition.column.type'),
            },
            {
                title: this.i18nService.translate('admin.sport.competition.column.gender'),
                filterMultiple: false,
                listOfFilter: this.genderUtilService.getGenders().map((gender) => ({
                    text: gender.nameI18n[this.i18nService.getActiveLang()] as string,
                    value: gender.nameI18n[this.i18nService.getActiveLang()],
                })),
                filterFn: (genderName: string, item: Competition) => {
                    let championshipOrTournament: Championship | Tournament | null = null;

                    if (item.type === CompetitionTypeEnum.CHAMPIONSHIP) {
                        championshipOrTournament = item as Championship;
                    } else {
                        championshipOrTournament = item as Tournament;
                    }

                    return (
                        (championshipOrTournament.gender.nameI18n[this.i18nService.getActiveLang()] as string) ===
                        genderName
                    );
                },
            },
        ];

        const editColumnHeader: DynamicColumnHeaderModel = {
            listOfFilter: [],
            title: this.i18nService.translate('admin.sport.competition.column.edit'),
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
            actionName: this.i18nService.translate('admin.sport.competition.action.edit'),
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
