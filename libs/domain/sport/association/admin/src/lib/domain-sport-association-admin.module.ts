import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainSportAssociationFormModule } from '@zsport/domain/sport/association/form';
import { DomainSportAssociationTableModule } from '@zsport/domain/sport/association/table';
import { CoreI18nModule } from '@zsport/core/i18n';

import { AssociationAdminRoutingModule } from './association-admin-routing.module';
import { AssociationAdminComponent } from './page/admin';
import { AssociationEditComponent, AssociationEditResolverService } from './page/edit';
import { AssociationListComponent, AssociationListResolverService } from './page/list';

@NgModule({
    declarations: [AssociationAdminComponent, AssociationEditComponent, AssociationListComponent],
    imports: [
        CommonModule,
        AssociationAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainSportAssociationFormModule,
        DomainSportAssociationTableModule,
    ],
    providers: [AssociationEditResolverService, AssociationListResolverService],
})
export class DomainSportAssociationAdminModule {}
