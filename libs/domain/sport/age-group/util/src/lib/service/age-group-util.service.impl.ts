import { Injectable } from '@angular/core';
import { AgeGroup, AgeGroupUtilService, I18nService, SelectOptionModel } from '@zsport/api';

@Injectable()
export class AgeGroupUtilServiceImpl extends AgeGroupUtilService {
    public constructor(private i18nService: I18nService) {
        super();

        this.currentLanguage = this.i18nService.getActiveLangAsString();
        this.ageGroups = this.createAgeGroups();
    }

    public convertEntityToModel(ageGroup: AgeGroup): AgeGroup {
        return {
            ...ageGroup,
        };
    }

    public convertModelToEntity(ageGroup: AgeGroup): AgeGroup {
        return {
            ...ageGroup,
        };
    }

    public getAgeGroupOptions(): SelectOptionModel[] {
        return this.ageGroups.map((ageGroup) => ({
            label: ageGroup.nameI18n[this.i18nService.getActiveLang()] as string,
            value: ageGroup,
        }));
    }

    public getAgeGroups(): AgeGroup[] {
        return this.ageGroups;
    }

    protected createAgeGroups(): AgeGroup[] {
        return [
            {
                baseYear: '2020',
                afterDate: 1104537600000,
                nameI18n: {
                    hu: 'U13',
                    en: 'U13',
                },
                uid: 'AG_1',
            },
            {
                baseYear: '2020',
                afterDate: 1104537600000,
                nameI18n: {
                    hu: 'U15',
                    en: 'U15',
                },
                uid: 'AG_2',
            },
            {
                baseYear: '2020',
                afterDate: 1041379200000,
                nameI18n: {
                    hu: 'U17',
                    en: 'U17',
                },
                uid: 'AG_3',
            },
            {
                baseYear: '2020',
                afterDate: 978307200000,
                nameI18n: {
                    hu: 'U19',
                    en: 'U19',
                },
                uid: 'AG_4',
            },
            {
                baseYear: '2020',
                afterDate: 1104537600000,
                nameI18n: {
                    hu: 'Felnőtt',
                    en: 'Adult',
                },
                uid: 'AG_5',
            },
            {
                baseYear: '2020',
                afterDate: 978307200000,
                nameI18n: {
                    hu: 'Gyerek',
                    en: 'Kids',
                },
                uid: 'AG_6',
            },
            {
                baseYear: '2020',
                afterDate: 978307200000,
                nameI18n: {
                    hu: 'Serdülő',
                    en: 'Adolescent',
                },
                uid: 'AG_7',
            },
            {
                baseYear: '2020',
                afterDate: 978307200000,
                nameI18n: {
                    hu: 'Ifjúsági',
                    en: 'Youth',
                },
                uid: 'AG_8',
            },
        ];
    }
}
