import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { RoleNames } from '@zsport/api';

import { ZsportAdminErrorPageComponent } from './page/error-page';
import { ZsportAdminAdminResolverService } from './resolver';

export const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./page/home-page/zsport-admin-home-page.module').then((module) => module.ZsportAdminHomePageModule),
        data: {
            breadcrumb: 'home',
        },
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./page/admin-page/zsport-admin-admin-page.module').then((lib) => lib.ZsportAdminAdminPageModule),
        resolve: { data: ZsportAdminAdminResolverService },
        data: {
            breadcrumb: 'admin',
            permissions: {
                only: [RoleNames.ADMIN, 'viewAdminPage'],
                redirectTo: '/error',
            },
        },
        canActivate: [NgxPermissionsGuard],
        canLoad: [NgxPermissionsGuard],
    },
    {
        path: 'error',
        component: ZsportAdminErrorPageComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class ZsportAdminAppRoutingModule {}
