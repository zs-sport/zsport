import { Injectable } from '@angular/core';
import {
    Country,
    CountryLocalizedNames,
    CountryNameEnum,
    CountryUtilService,
    Entity,
    I18nService,
    Model,
    SelectOptionModel,
} from '@zsport/api';

@Injectable()
export class CountryUtilServiceImpl extends CountryUtilService {
    private countries: Country[];

    public constructor(private i18nService: I18nService) {
        super();

        this.countries = this.createCountries();
    }

    public convertEntityToModel(entity: Entity, isVersion: boolean): Model {
        throw new Error('Method not implemented.');
    }

    public convertModelToEntity(model: Model): Entity {
        throw new Error('Method not implemented.');
    }

    public getCountries(): Country[] {
        return this.countries;
    }

    public getCountryOptions(): SelectOptionModel[] {
        return this.countries.map((country) => ({
            label: country.nameI18n[this.i18nService.getActiveLang()] as string,
            value: country,
        }));
    }

    protected createCountries(): Country[] {
        const hungary = CountryNameEnum.HUNGARY.toString();
        const uk = CountryNameEnum.UNITED_KINGDOM.toString();
        const sp = CountryNameEnum.SPAIN.toString();

        return [
            {
                nameI18n: {
                    hu: CountryLocalizedNames.hu[hungary],
                    en: CountryLocalizedNames.en[hungary],
                },
                uid: 'COU1',
            },
            {
                nameI18n: {
                    hu: CountryLocalizedNames.hu[uk],
                    en: CountryLocalizedNames.en[uk],
                },
                uid: 'COU2',
            },
            {
                nameI18n: {
                    hu: CountryLocalizedNames.hu[sp],
                    en: CountryLocalizedNames.en[sp],
                },
                uid: 'COU3',
            },
        ];
    }
}
