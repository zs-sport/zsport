import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubAdminComponent } from './page/admin';
import { ClubEditComponent, ClubEditResolverService } from './page/edit';
import { EditDetailsComponent } from './page/edit-details';
import { ClubListComponent, ClubListResolverService } from './page/list';
import { ClubAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: ClubAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: ClubEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', ClubAdminPermissionsService.viewClubEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:clubId',
                resolve: { data: ClubEditResolverService },
                children: [
                    {
                        path: '',
                        redirectTo: 'edit-details',
                        pathMatch: 'full',
                    },
                    {
                        path: 'edit-details',
                        component: EditDetailsComponent,
                    },
                ],
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: ClubListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', ClubAdminPermissionsService.viewClubListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: ClubListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClubAdminRoutingModule {}
