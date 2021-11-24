import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssociationAdminComponent } from './page/admin';
import { AssociationEditComponent, AssociationEditResolverService } from './page/edit';
import { AssociationListComponent, AssociationListResolverService } from './page/list';
import { AssociationAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: AssociationAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: AssociationEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', AssociationAdminPermissionsService.viewAssociationEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:associationId',
                pathMatch: 'full',
                resolve: { data: AssociationEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: AssociationListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', AssociationAdminPermissionsService.viewAssociationListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: AssociationListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssociationAdminRoutingModule {}
