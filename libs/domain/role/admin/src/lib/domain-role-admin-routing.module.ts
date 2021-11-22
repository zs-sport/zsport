import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleNames } from '@zsport/api';

import { RoleAdminComponent } from './page/admin';
import { RoleEditComponent, RoleEditResolverService } from './page/edit';
import { RoleListComponent, RoleListResolverService } from './page/list';
import { RoleAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: RoleAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: RoleEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: [RoleNames.ADMIN, RoleAdminPermissionsService.viewRoleEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:roleId',
                pathMatch: 'full',
                resolve: { data: RoleEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: RoleListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: [RoleNames.ADMIN, RoleAdminPermissionsService.viewRoleListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: RoleListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DomainRoleAdminRoutingModule {}
