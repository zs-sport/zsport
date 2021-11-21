import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAdminComponent } from './page/admin';
import { EditComponent, EditResolverService } from './page/edit';
import { ListComponent, ListResolverService } from './page/list';
import { UserAdminPermissionsService } from './service';
import { RoleNames } from '@zsport/api';

const routes: Routes = [
    {
        path: '',
        component: UserAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: EditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: [RoleNames.ADMIN, 'someSOME', UserAdminPermissionsService.viewUserEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:userId',
                pathMatch: 'full',
                resolve: { data: EditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: ListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: [RoleNames.ADMIN, UserAdminPermissionsService.viewUserListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: ListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DomainUserAdminRoutingModule {}
