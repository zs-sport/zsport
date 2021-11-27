import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonAdminComponent } from './page/admin';
import { PersonEditComponent, PersonEditResolverService } from './page/edit';
import { PersonListComponent, PersonListResolverService } from './page/list';
import { PersonAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: PersonAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: PersonEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', PersonAdminPermissionsService.viewPersonEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:personId',

                pathMatch: 'full',
                resolve: { data: PersonEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: PersonListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', PersonAdminPermissionsService.viewPersonListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: PersonListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonAdminRoutingModule {}
