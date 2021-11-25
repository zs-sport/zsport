import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleNames } from '@zsport/api';

import { AdminAssociationPermissionsService } from '../../permission/association';
import { AdminCategoryPermissionsService } from '../../permission/category';
import { ZsportAdminAdminRolePermissionsService } from '../../permission/role';
import { ZsportAdminAdminUserPermissionsService } from '../../permission/user';
import { ZsportAdminAdminPageComponent } from './zsport-admin-admin-page.component';

const routes: Routes = [
    {
        path: '',
        component: ZsportAdminAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
            },
            {
                path: 'user',
                data: {
                    breadcrumb: 'user',
                    permissions: {
                        only: [RoleNames.ADMIN, ZsportAdminAdminUserPermissionsService.viewUserAdminPage],
                        redirectTo: '/error',
                    },
                },
                loadChildren: () => import('@zsport/domain/user/admin').then((lib) => lib.DomainUserAdminModule),
                canActivate: [NgxPermissionsGuard],
                canLoad: [NgxPermissionsGuard],
            },
            {
                path: 'role',
                data: {
                    breadcrumb: 'role',
                    permissions: {
                        only: [RoleNames.ADMIN, ZsportAdminAdminRolePermissionsService.viewRoleAdminPage],
                        redirectTo: '/error',
                    },
                },
                loadChildren: () => import('@zsport/domain/role/admin').then((lib) => lib.DomainRoleAdminModule),
                canActivate: [NgxPermissionsGuard],
                canLoad: [NgxPermissionsGuard],
            },
            {
                path: 'association',
                data: {
                    breadcrumb: 'Association',
                    permissions: {
                        only: [RoleNames.ADMIN, AdminAssociationPermissionsService.viewAssociationAdminPage],
                        redirectTo: '/error',
                    },
                },
                loadChildren: () =>
                    import('@zsport/domain/sport/association/admin').then(
                        (lib) => lib.DomainSportAssociationAdminModule
                    ),
                canActivate: [NgxPermissionsGuard],
                canLoad: [NgxPermissionsGuard],
            },
            {
                path: 'category',
                data: {
                    breadcrumb: 'Category',
                    permissions: {
                        only: ['ADMIN', AdminCategoryPermissionsService.viewCategoryAdminPage],
                        redirectTo: '/error',
                    },
                },
                loadChildren: () =>
                    import('@zsport/domain/sport/category/admin').then((lib) => lib.DomainSportCategoryAdminModule),
                canActivate: [NgxPermissionsGuard],
                canLoad: [NgxPermissionsGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ZsportAdminAdminRoutingModule {}
