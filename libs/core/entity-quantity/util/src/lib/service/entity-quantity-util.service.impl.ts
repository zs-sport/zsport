import { Injectable } from '@angular/core';
import {
    I18nService,
    EntityQuantityEntity,
    EntityQuantityModel,
    EntityQuantityUtilService,
    EntityQuantityEnum,
} from '@zsport/api';

@Injectable()
export class EntityQuantityUtilServiceImpl extends EntityQuantityUtilService {
    public constructor(private i18nService: I18nService) {
        super();

        this.activeLanguage = this.i18nService.getActiveLangAsString();
    }

    public convertEntityToModel(entityQuantityEntity: EntityQuantityEntity, isVersion: boolean): EntityQuantityModel {
        let updatedEntityQuantityModel: EntityQuantityModel;

        updatedEntityQuantityModel = {
            ...entityQuantityEntity,
        };

        return updatedEntityQuantityModel;
    }

    public convertModelToEntity(entityQuantityModel: EntityQuantityModel): EntityQuantityEntity {
        return {
            ...entityQuantityModel,
        };
    }

    public createEntityQuantity(type: EntityQuantityEnum): EntityQuantityEntity {
        return {
            uid: type,
            quantity: 0,
            groups: {},
        };
    }
}
