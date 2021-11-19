import { Identifiable } from '../../base';
import { Dates, States } from '../../state';
import { Association } from '../association';
import { Category } from '../category';
import { Club } from '../club';
import { CompetitionRule } from './competition-rule';
import { CompetitionTypeEnum } from './competition-type.enum';

export interface Competition extends Identifiable {
    category: Category;
    currentLanguage: string;
    dates?: Dates;
    fromTo: number[];
    name: string;
    owner: Club | Association;
    rule: CompetitionRule;
    states?: States;
    type: CompetitionTypeEnum;
}
