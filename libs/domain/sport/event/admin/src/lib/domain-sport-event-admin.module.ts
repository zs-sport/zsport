import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportEventFormModule } from '@zsport/domain/sport/event/form';
import { DomainSportEventTableModule } from '@zsport/domain/sport/event/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventAdminRoutingModule } from './event-admin-routing.module';
import { EventAdminComponent } from './page/admin';
import { EventEditComponent, EventEditResolverService } from './page/edit';
import { EventEditDetailsComponent } from './page/edit-details';
import { EventListComponent, EventListResolverService } from './page/list';

@NgModule({
    declarations: [EventAdminComponent, EventEditComponent, EventEditDetailsComponent, EventListComponent],
    imports: [
        CommonModule,
        EventAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        NzSelectModule,
        NzTabsModule,
        CoreI18nModule,
        DomainSportEventFormModule,
        DomainSportEventTableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [EventEditResolverService, EventListResolverService],
})
export class DomainSportEventAdminModule {}
