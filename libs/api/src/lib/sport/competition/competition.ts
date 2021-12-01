import { Identifiable } from '../../base';
import { Dates, States } from '../../state';
import { Association } from '../association';
import { Category } from '../category';
import { Club } from '../club';
import { CompetitionRule } from './competition-rule';
import { CompetitionTypeEnum } from './competition-type.enum';

export interface Competition extends Identifiable {
    category: Category;
    dates: Dates | null;
    fromTo: number[];
    name: string;
    owner: Club | Association;
    rule: CompetitionRule;
    states: States | null;
    type: CompetitionTypeEnum;
}
