import { Injectable } from '@angular/core';
import { ActionEnum, AssociationPermissionsService, AssociationResourceEnum } from '@zsport/api';

@Injectable()
export class AssociationAdminPermissionsService extends AssociationPermissionsService {
    static readonly viewAssociationAdminPage =
        ActionEnum.VIEW.toString() + AssociationResourceEnum.ASSOCIATION_ADMIN_PAGE.toString();
    static readonly viewAssociationEditPage =
        ActionEnum.VIEW.toString() + AssociationResourceEnum.ASSOCIATION_EDIT_PAGE.toString();
    static readonly viewAssociationListPage =
        ActionEnum.VIEW.toString() + AssociationResourceEnum.ASSOCIATION_LIST_PAGE.toString();
}
