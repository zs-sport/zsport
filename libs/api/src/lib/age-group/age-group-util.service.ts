import { EntityUtilService } from '../base';
import { AgeGroup } from './age-group';

export abstract class AgeGroupUtilService extends EntityUtilService {
    protected ageGroups!: AgeGroup[];
    protected currentLanguage!: string;

    public abstract getAgeGroups(): AgeGroup[];
}
