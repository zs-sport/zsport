import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    PermissionsService,
    RoleEntity,
} from '@zsport/api';
import { RoleFormControlFactory } from '@zsport/domain/role/form';

@Injectable()
export class ZsportAdminRoleFormControlFactoryImpl extends RoleFormControlFactory {
    public constructor(private i18nService: I18nService) {
        super();
    }

    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return of([
            this.createUIDControl(dataModel as RoleEntity, 1),
            this.createTextControl({
                key: 'name',
                label: this.i18nService.translate('admin.role.label.name'),
                order: 2,
                placeholder: this.i18nService.translate('admin.role.label.name_placeholder'),
                required: true,
                type: 'text',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: dataModel ? (dataModel as RoleEntity).name : undefined,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => o1 === o2,
                key: 'permissions',
                label: this.i18nService.translate('admin.role.label.permissions'),
                mode: DynamicFormSelectModeEnum.multiple,
                options$: of(PermissionsService.permissions).pipe(
                    map((permissions) =>
                        permissions.map((permission) => {
                            return {
                                label: permission,
                                value: permission,
                            };
                        })
                    )
                ),
                order: 3,
                placeholder: this.i18nService.translate('admin.role.label.permissions_placeholder'),
                required: true,
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: undefined }],
                value: dataModel ? (dataModel as RoleEntity).permissions : undefined,
            }),
        ]);
    }
}
