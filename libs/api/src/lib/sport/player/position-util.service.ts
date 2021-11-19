import { BaseService } from '../../base';
import { Position } from './position';

export const HandballPositionShortForms = {
    GK: 'gk',
    P: 'p',
    RW: 'rw',
    RB: 'rb',
    CB: 'cb',
    LB: 'lb',
    LW: 'lw',
};

export abstract class PositionUtilService extends BaseService {
    protected positions: any = {
        handball: [
            {
                uid: 'Pos1',
                nameI18n: {
                    hu: 'kapus',
                    en: 'goalkeeper',
                },
                shortForm: HandballPositionShortForms.GK,
            },
            {
                uid: 'Pos2',
                nameI18n: {
                    hu: 'beálló',
                    en: 'pivot',
                },
                shortForm: HandballPositionShortForms.P,
            },
            {
                uid: 'Pos3',
                nameI18n: {
                    hu: 'jobbszélső',
                    en: 'right wingman',
                },
                shortForm: HandballPositionShortForms.RW,
            },
            {
                uid: 'Pos4',
                nameI18n: {
                    hu: 'jobbátlövő',
                    en: 'right backcourt',
                },
                shortForm: HandballPositionShortForms.RB,
            },
            {
                uid: 'Pos5',
                nameI18n: {
                    hu: 'irányító',
                    en: 'centre backcourt',
                },
                shortForm: HandballPositionShortForms.CB,
            },
            {
                uid: 'Pos6',
                nameI18n: {
                    hu: 'balátlövő',
                    en: 'left backcourt',
                },
                shortForm: HandballPositionShortForms.LB,
            },
            {
                uid: 'Pos7',
                nameI18n: {
                    hu: 'balszélső',
                    en: 'left wingman',
                },
                shortForm: HandballPositionShortForms.LW,
            },
        ],
    };

    public abstract getPositions(categoryName: string): Position[];
}
