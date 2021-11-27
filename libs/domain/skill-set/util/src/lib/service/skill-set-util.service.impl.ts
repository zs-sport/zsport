import { Injectable } from '@angular/core';
import { Entity, I18nService, Model, SkillSet, SkillSetUtilService } from '@zsport/api';

@Injectable()
export class SkillSetUtilServiceImpl extends SkillSetUtilService {
    public constructor() {
        super();

        this.skillSets = this.createSkillSets();
    }

    public convertEntityToModel(skillSet: SkillSet): SkillSet {
        return {
            ...skillSet,
        };
    }

    public convertModelToEntity(skillSetModel: SkillSet): SkillSet {
        return { ...skillSetModel };
    }

    public getSkillSets(): SkillSet[] {
        return this.skillSets;
    }

    protected createSkillSets(): SkillSet[] {
        return [
            {
                nameI18n: {
                    hu: 'Kézilabda játékos',
                    en: 'Handball Player',
                },
                uid: 'SS_1',
            },
            {
                nameI18n: {
                    hu: 'Kézilabda edző',
                    en: 'Handball Trainer',
                },
                uid: 'SS_2',
            },
            {
                nameI18n: {
                    hu: 'Labdarúgó játékos',
                    en: 'Football Player',
                },
                uid: 'SS_3',
            },
            {
                nameI18n: {
                    hu: 'Labdarúgó edző',
                    en: 'Football Trainer',
                },
                uid: 'SS_4',
            },
        ];
    }
}
