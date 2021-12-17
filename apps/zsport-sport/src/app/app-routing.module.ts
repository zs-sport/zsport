import { NgxPermissionsGuard } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { HomePageResolverService } from './resolver';

export const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./page/home-page/home-page.module').then((module) => module.HomePageModule),
        resolve: { data: HomePageResolverService },
        data: {
            breadcrumb: 'home',
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
