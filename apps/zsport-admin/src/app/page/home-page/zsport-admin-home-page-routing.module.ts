import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZsportAdminHomePageComponent } from './zsport-admin-home-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ZsportAdminHomePageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ZsportAdminHomePageRoutingModule {}
