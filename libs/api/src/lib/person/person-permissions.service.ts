import { ActionEnum } from '../action';
import { PersonResourceEnum } from './person-resource.enum';

export class PersonPermissionsService {
    static readonly createPersonEntity = ActionEnum.CREATE.toString() + PersonResourceEnum.PERSON_ENTITY.toString();
    static readonly deletePersonEntity = ActionEnum.DELETE.toString() + PersonResourceEnum.PERSON_ENTITY.toString();
    static readonly updatePersonEntity = ActionEnum.UPDATE.toString() + PersonResourceEnum.PERSON_ENTITY.toString();
    static readonly viewPersonEntity = ActionEnum.VIEW.toString() + PersonResourceEnum.PERSON_ENTITY.toString();
}
