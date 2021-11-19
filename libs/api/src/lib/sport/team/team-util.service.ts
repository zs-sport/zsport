import { AgeGroup } from '../../age-group';
import { EntityUtilService } from '../../base';
import { Gender } from '../../gender';
import { Category } from '../category';

export abstract class TeamUtilService extends EntityUtilService {
    protected currentLanguage!: string;

    protected abstract generateAgeGroupGenderCategory(ageGroup: AgeGroup, gender: Gender, category: Category): string;
}
