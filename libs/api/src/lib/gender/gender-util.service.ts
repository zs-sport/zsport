import { EntityUtilService } from '../base';
import { SelectOptionModel } from '../dynamic-form';
import { Gender } from './gender';

export abstract class GenderUtilService extends EntityUtilService {
    protected currentLanguage!: string;
    protected genders!: Gender[];

    public abstract getGenders(): Gender[];
    public abstract getGenderOptions(): SelectOptionModel[];
}
