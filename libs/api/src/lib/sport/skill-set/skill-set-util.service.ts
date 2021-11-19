import { EntityUtilService } from '../../base';
import { SkillSet } from './skill-set';

export abstract class SkillSetUtilService extends EntityUtilService {
    protected currentLanguage!: string;
    protected skillSets!: SkillSet[];

    public abstract getSkillSets(): SkillSet[];
}
