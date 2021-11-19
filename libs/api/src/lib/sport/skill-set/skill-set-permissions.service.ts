import { ActionEnum } from '../../action';
import { SkillSetResourceEnum } from './skill-set-resource.enum';

export class SkillSetPermissionsService {
    static readonly createSkillSetEntity =
        ActionEnum.CREATE.toString() + SkillSetResourceEnum.SKILL_SET_ENTITY.toString();
    static readonly deleteSkillSetEntity =
        ActionEnum.DELETE.toString() + SkillSetResourceEnum.SKILL_SET_ENTITY.toString();
    static readonly updateSkillSetEntity =
        ActionEnum.UPDATE.toString() + SkillSetResourceEnum.SKILL_SET_ENTITY.toString();
    static readonly viewSkillSetEntity = ActionEnum.VIEW.toString() + SkillSetResourceEnum.SKILL_SET_ENTITY.toString();
}
