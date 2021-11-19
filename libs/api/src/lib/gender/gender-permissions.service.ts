import { ActionEnum } from '../action';
import { GenderResourceEnum } from './gender-resource.enum';

export class GenderPermissionsService {
    static readonly createGenderEntity = ActionEnum.CREATE.toString() + GenderResourceEnum.GENDER_ENTITY.toString();
    static readonly deleteGenderEntity = ActionEnum.DELETE.toString() + GenderResourceEnum.GENDER_ENTITY.toString();
    static readonly updateGenderEntity = ActionEnum.UPDATE.toString() + GenderResourceEnum.GENDER_ENTITY.toString();
    static readonly viewGenderEntity = ActionEnum.VIEW.toString() + GenderResourceEnum.GENDER_ENTITY.toString();
}
