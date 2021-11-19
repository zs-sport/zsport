import { EntityUtilService } from '../base';
import { Gender } from './gender';

export abstract class GenderUtilService extends EntityUtilService {
    protected currentLanguage!: string;
    protected genders!: Gender[];

    public abstract getGenders(): Gender[];
}
