import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamAdminComponent } from './page/admin';
import { TeamEditComponent, TeamEditResolverService } from './page/edit';
import { TeamListComponent, TeamListResolverService } from './page/list';
import { TeamAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: TeamAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: TeamEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', TeamAdminPermissionsService.viewTeamEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:teamId',
                pathMatch: 'full',
                resolve: { data: TeamEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: TeamListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', TeamAdminPermissionsService.viewTeamListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: TeamListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeamAdminRoutingModule {}
