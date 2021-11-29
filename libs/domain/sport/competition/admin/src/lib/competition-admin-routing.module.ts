import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionAdminComponent } from './page/admin';
import { CompetitionEditComponent, CompetitionEditResolverService } from './page/edit';
import { CompetitionListComponent, CompetitionListResolverService } from './page/list';
import { CompetitionAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: CompetitionAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: CompetitionEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', CompetitionAdminPermissionsService.viewCompetitionEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:competitionId',

                pathMatch: 'full',
                resolve: { data: CompetitionEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: CompetitionListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', CompetitionAdminPermissionsService.viewCompetitionListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: CompetitionListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CompetitionAdminRoutingModule {}
