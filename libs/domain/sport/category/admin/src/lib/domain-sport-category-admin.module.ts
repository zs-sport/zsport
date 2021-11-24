import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';

import { DomainSportCategoryFormModule } from '@zsport/domain/sport/category/form';
import { DomainSportCategoryTableModule } from '@zsport/domain/sport/category/table';
import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { CategoryAdminComponent } from './page/admin';
import { CategoryEditComponent, CategoryEditResolverService } from './page/edit';
import { CategoryListComponent, CategoryListResolverService } from './page/list';

@NgModule({
    declarations: [CategoryAdminComponent, CategoryEditComponent, CategoryListComponent],
    imports: [
        CommonModule,
        CategoryAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainSportCategoryFormModule,
        DomainSportCategoryTableModule,
    ],
    providers: [CategoryEditResolverService, CategoryListResolverService],
})
export class DomainSportCategoryAdminModule {}
