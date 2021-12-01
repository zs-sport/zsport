import { AgeGroup } from '../../age-group';
import { Identifiable } from '../../base';
import { Gender } from '../../gender';
import { Dates, States } from '../../state';
import { Category } from '../category';
import { Club } from '../club';

export interface Team extends Identifiable {
    ageGroup: AgeGroup;
    ageGroupGenderCategory: string;
    category: Category;
    club: Club;
    dates: Dates | null;
    gender: Gender;
    name: string;
    states: States | null;
}
