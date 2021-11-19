import { Category } from '../category';
import { AgeGroup } from '../../age-group';
import { Identifiable } from '../../base';
import { Gender } from '../../gender';
import { Club } from '../club';

export interface Team extends Identifiable {
    ageGroup: AgeGroup;
    ageGroupGenderCategory: string;
    category: Category;
    club: Club;
    gender: Gender;
}
