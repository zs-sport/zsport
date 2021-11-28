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
                    {
                        path: 'teams',
                        data: {
                            breadcrumb: 'Teams',
                            permissions: {
                                only: ['ADMIN', 'viewTeamAdminPage'],
                                redirectTo: '/error',
                            },
                        },
                        loadChildren: () =>
                            import('@zsport/domain/sport/team/admin').then((lib) => lib.DomainSportTeamAdminModule),
                        canActivate: [NgxPermissionsGuard],
                        canLoad: [NgxPermissionsGuard],
                    },
                    {
                        path: 'players',
                        data: {
                            breadcrumb: 'Players',
                            permissions: {
                                only: ['ADMIN', 'viewPlayerAdminPage'],
                                redirectTo: '/error',
                            },
                        },
                        loadChildren: () =>
                            import('@zsport/domain/sport/player/admin').then((lib) => lib.DomainSportPlayerAdminModule),
                        canActivate: [NgxPermissionsGuard],
                        canLoad: [NgxPermissionsGuard],
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
