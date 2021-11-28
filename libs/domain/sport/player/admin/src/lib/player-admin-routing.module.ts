import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerAdminComponent } from './page/admin';
import { PlayerEditComponent, PlayerEditResolverService } from './page/edit';
import { PlayerListComponent, PlayerListResolverService } from './page/list';
import { PlayerAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: PlayerAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: PlayerEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', PlayerAdminPermissionsService.viewPlayerEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:playerId',
                pathMatch: 'full',
                resolve: { data: PlayerEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: PlayerListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', PlayerAdminPermissionsService.viewPlayerListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: PlayerListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlayerAdminRoutingModule {}
