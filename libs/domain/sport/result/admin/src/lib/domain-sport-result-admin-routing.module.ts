import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultAdminComponent } from './page/admin';
import { ResultEditComponent, ResultEditResolverService } from './page/edit';
import { ResultListComponent, ResultListResolverService } from './page/list';
import { ResultAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: ResultAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: ResultEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', ResultAdminPermissionsService.viewResultEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:resultId',
                pathMatch: 'full',
                resolve: { data: ResultEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: ResultListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', ResultAdminPermissionsService.viewResultListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: ResultListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DomainSportResultAdminRoutingModule {}
