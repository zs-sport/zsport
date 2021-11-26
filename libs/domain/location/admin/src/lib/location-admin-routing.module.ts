import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationAdminComponent } from './page/admin';
import { LocationEditComponent, LocationEditResolverService } from './page/edit';
import { LocationListComponent, LocationListResolverService } from './page/list';
import { LocationAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: LocationAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: LocationEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', LocationAdminPermissionsService.viewLocationEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:locationId',

                pathMatch: 'full',
                resolve: { data: LocationEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: LocationListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', LocationAdminPermissionsService.viewLocationListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: LocationListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LocationAdminRoutingModule {}
