import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AuthorizationService,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    RoleEntity,
    RoleNames,
    RoleStateService,
    UserEntity,
    UserPermissionsService,
} from '@zsport/api';
import { UserFormControlFactory } from '@zsport/domain/user/form';

@Injectable()
export class ZsportAdminUserFormControlFactoryImpl extends UserFormControlFactory {
    public constructor(
        private authorizationService: AuthorizationService,
        private i18nService: I18nService,
        private roleStateService: RoleStateService
    ) {
        super();
    }

    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        const languages = [
            {
                value: 'en',
                label: this.i18nService.translate('application.header.languages.en'),
                uid: '10001',
            },
            {
                value: 'hu',
                label: this.i18nService.translate('application.header.languages.hu'),
                uid: '10002',
            },
        ];

        return this.roleStateService.selectEntities$().pipe(
            filter((entities) => entities.length > 0),
            switchMap((entities) => {
                const formControls: ControlBase<any>[] = [
                    this.createUIDControl(dataModel as UserEntity, 1),
                    this.createHiddenControl({
                        key: 'photoURL',
                        order: 2,
                        type: 'hidden',
                        validators: undefined,
                        value: dataModel ? (dataModel as UserEntity).photoURL : '',
                    }),
                    this.createTextControl({
                        key: 'firstName',
                        label: this.i18nService.translate('admin.user.label.first_name'),
                        order: 2,
                        placeholder: this.i18nService.translate('admin.user.label.first_name_placeholder'),
                        type: 'text',
                        validators: [],
                        value: dataModel ? (dataModel as UserEntity).firstName : undefined,
                    }),
                    this.createTextControl({
                        key: 'lastName',
                        label: this.i18nService.translate('admin.user.label.last_name'),
                        order: 3,
                        placeholder: this.i18nService.translate('admin.user.label.last_name_placeholder'),
                        type: 'text',
                        validators: [],
                        value: dataModel ? (dataModel as UserEntity).lastName : undefined,
                    }),
                    this.createTextControl({
                        key: 'displayName',
                        label: this.i18nService.translate('admin.user.label.display_name'),
                        order: 4,
                        placeholder: this.i18nService.translate('admin.user.label.display_name_placeholder'),
                        required: true,
                        type: 'text',
                        validators: [
                            { key: DynamicFormValidatorNameEnum.required, value: null },
                            { key: DynamicFormValidatorNameEnum.minLength, value: 3 },
                            { key: DynamicFormValidatorNameEnum.maxLength, value: 50 },
                        ],
                        value: dataModel ? (dataModel as UserEntity).displayName : undefined,
                    }),
                    this.createEmailControl({
                        key: 'email',
                        label: this.i18nService.translate('admin.user.label.email'),
                        order: 5,
                        placeholder: this.i18nService.translate('admin.user.label.email_placeholder'),
                        required: true,
                        type: 'email',
                        validators: [
                            { key: DynamicFormValidatorNameEnum.required, value: null },
                            { key: DynamicFormValidatorNameEnum.email, value: null },
                        ],
                        value: dataModel ? (dataModel as UserEntity).email : undefined,
                    }),
                    this.createPhoneControl({
                        key: 'phone',
                        label: this.i18nService.translate('admin.user.label.mobile_phone'),
                        order: 6,
                        placeholder: this.i18nService.translate('admin.user.label.mobile_phone_placeholder'),
                        type: 'phone',
                        validators: [],
                        value: dataModel ? (dataModel as UserEntity).phone : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => o1 === o2,
                        key: 'language',
                        label: this.i18nService.translate('admin.user.label.language'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(languages).pipe(
                            map((languages) =>
                                languages.map((language) => ({
                                    label: language.label,
                                    value: language.value,
                                }))
                            )
                        ),
                        order: 7,
                        placeholder: this.i18nService.translate('admin.user.label.language_placeholder'),
                        required: true,
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: dataModel
                            ? (dataModel as UserEntity).language
                            : this.i18nService.getActiveLangAsString(),
                    }),
                ];

                if (
                    this.authorizationService.hasRole(RoleNames.ADMIN) ||
                    this.authorizationService.hasPermission(UserPermissionsService.updateUserEntity) ||
                    this.authorizationService.hasPermission(UserPermissionsService.createUserEntity)
                ) {
                    formControls.push(
                        this.createSelectControl({
                            compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                            key: 'roles',
                            label: this.i18nService.translate('admin.user.label.roles'),
                            mode: DynamicFormSelectModeEnum.multiple,
                            options$: of(entities).pipe(
                                map((entities) =>
                                    entities.map((entity) => ({
                                        label: (entity as RoleEntity).name || '',
                                        value: entity as RoleEntity,
                                    }))
                                )
                            ),
                            order: 8,
                            placeholder: this.i18nService.translate('admin.user.label.roles_placeholder'),
                            required: true,
                            type: 'select',
                            validators: [],
                            value: dataModel ? (dataModel as UserEntity).roles : null,
                        })
                    );
                } else {
                    formControls.push(
                        this.createHiddenControl({
                            key: 'roles',
                            order: 8,
                            type: 'hidden',
                            validators: undefined,
                            value: dataModel ? (dataModel as UserEntity).roles : null,
                        })
                    );
                }

                return of(formControls);
            })
        );
    }
}
