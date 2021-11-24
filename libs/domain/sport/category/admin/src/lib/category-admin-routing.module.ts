import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryAdminComponent } from './page/admin';
import { CategoryEditComponent, CategoryEditResolverService } from './page/edit';
import { CategoryListComponent, CategoryListResolverService } from './page/list';
import { CategoryAdminPermissionsService } from './service';

const routes: Routes = [
    {
        path: '',
        component: CategoryAdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: CategoryEditComponent,
                data: {
                    breadcrumb: 'Edit',
                    permissions: {
                        only: ['ADMIN', CategoryAdminPermissionsService.viewCategoryEditPage],
                        redirectTo: '/error',
                    },
                },
                path: 'edit/:categoryId',
                pathMatch: 'full',
                resolve: { data: CategoryEditResolverService },
            },
            {
                canActivate: [NgxPermissionsGuard],
                component: CategoryListComponent,
                data: {
                    breadcrumb: 'List',
                    permissions: {
                        only: ['ADMIN', CategoryAdminPermissionsService.viewCategoryListPage],
                        redirectTo: '/error',
                    },
                },
                path: 'list',
                pathMatch: 'full',
                resolve: { data: CategoryListResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryAdminRoutingModule {}
