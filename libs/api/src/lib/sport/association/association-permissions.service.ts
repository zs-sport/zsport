import { ActionEnum } from '../../action';
import { AssociationResourceEnum } from './association-resource.enum';

export class AssociationPermissionsService {
    static readonly createAssociationEntity =
        ActionEnum.CREATE.toString() + AssociationResourceEnum.ASSOCIATION_ENTITY.toString();
    static readonly deleteAssociationEntity =
        ActionEnum.DELETE.toString() + AssociationResourceEnum.ASSOCIATION_ENTITY.toString();
    static readonly updateAssociationEntity =
        ActionEnum.UPDATE.toString() + AssociationResourceEnum.ASSOCIATION_ENTITY.toString();
    static readonly viewAssociationEntity =
        ActionEnum.VIEW.toString() + AssociationResourceEnum.ASSOCIATION_ENTITY.toString();
}
