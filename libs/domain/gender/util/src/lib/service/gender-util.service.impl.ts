import { Injectable } from '@angular/core';
import { Entity, Gender, GenderUtilService, I18nService, Model, SelectOptionModel } from '@zsport/api';

@Injectable()
export class GenderUtilServiceImpl extends GenderUtilService {
    public constructor(private i18nService: I18nService) {
        super();

        this.genders = this.createGenders();
    }

    public convertEntityToModel(entity: Entity, isVersion: boolean): Model {
        throw new Error('Method not implemented.');
    }

    public convertModelToEntity(model: Model): Entity {
        throw new Error('Method not implemented.');
    }

    public getGenderOptions(): SelectOptionModel[] {
        return this.genders.map((gender) => ({
            label: gender.nameI18n[this.i18nService.getActiveLang()] as string,
            value: gender,
        }));
    }

    public getGenders(): Gender[] {
        return this.genders;
    }

    protected createGenders(): Gender[] {
        return [
            {
                nameI18n: {
                    hu: 'férfi',
                    en: 'male',
                },
                uid: 'G_2',
            },
            {
                nameI18n: {
                    hu: 'nő',
                    en: 'female',
                },
                uid: 'G_1',
            },
        ];
    }
}
