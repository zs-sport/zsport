import { Injectable } from '@angular/core';
import {
    AssociationEntity,
    AssociationModel,
    AssociationUtilService,
    CategoryModel,
    CategoryUtilService,
    I18nService,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class AssociationUtilServiceImpl extends AssociationUtilService {
    public constructor(
        private i18NService: I18nService,
        private stateUtilService: StateUtilService,
        private categoryUtilService: CategoryUtilService
    ) {
        super();
    }

    public convertModelToEntity(model: AssociationModel): AssociationEntity {
        return { ...model };
    }

    public convertEntityToModel(association: AssociationEntity): AssociationModel {
        let updatedAssociationModel: AssociationModel;

        if (!association.uid) {
            const updatedNameI18n: any = {};

            updatedNameI18n[this.i18NService.getActiveLangAsString()] = association.nameI18n;

            association = this.stateUtilService.addDefaultState(association) as AssociationEntity;
            association = this.stateUtilService.addDefaultDates(association) as AssociationEntity;

            updatedAssociationModel = {
                dates: association.dates,
                nameI18n: updatedNameI18n,
                parent: association.parent ? (association.parent as AssociationModel) : null,
                category: this.categoryUtilService.convertEntityToModel(association.category, true) as CategoryModel,
                shortName: association.shortName || null,
                states: association.states,
                uid: association.uid,
            };
        } else {
            association = this.stateUtilService.updateDates(association) as AssociationEntity;

            updatedAssociationModel = {
                dates: association.dates,
                nameI18n: association.nameI18n,
                parent: association.parent ? (association.parent as AssociationModel) : null,
                category: association.category as CategoryModel,
                shortName: association.shortName || null,
                states: association.states,
                uid: association.uid,
            };
        }

        return updatedAssociationModel;
    }
}
