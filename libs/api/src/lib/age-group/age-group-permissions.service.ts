import { ActionEnum } from '../action';
import { AgeGroupResourceEnum } from './age-group-resource.enum';

export class AgeGroupPermissionsService {
    static readonly createAgeGroupEntity =
        ActionEnum.CREATE.toString() + AgeGroupResourceEnum.AGE_GROUP_ENTITY.toString();
    static readonly deleteAgeGroupEntity =
        ActionEnum.DELETE.toString() + AgeGroupResourceEnum.AGE_GROUP_ENTITY.toString();
    static readonly updateAgeGroupEntity =
        ActionEnum.UPDATE.toString() + AgeGroupResourceEnum.AGE_GROUP_ENTITY.toString();
    static readonly viewAgeGroupEntity = ActionEnum.VIEW.toString() + AgeGroupResourceEnum.AGE_GROUP_ENTITY.toString();
}
