import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventAdminComponent } from './page/admin';
import { EventEditComponent, EventEditResolverService } from './page/edit';
import { EventEditDetailsComponent } from './page/edit-details';
import { EventListComponent, EventListResolverService } from './page/list';
import { EventAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: EventAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: EventEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', EventAdminPermissionsService.viewEventEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:eventId',
                resolve: { data: EventEditResolverService },
                children: [
                    {
                        path: '',
                        redirectTo: 'edit-details',
                        pathMatch: 'full',
                    },
                    {
                        path: 'edit-details',
                        component: EventEditDetailsComponent,
                    },
                ],
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: EventListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', EventAdminPermissionsService.viewEventListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: EventListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventAdminRoutingModule {}
