import { DynamicModule } from 'ng-dynamic-component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportGroupFormModule } from '@zsport/domain/sport/group/form';

import { TournamentFinalComponent, TournamentFormComponent } from './component';

@NgModule({
    declarations: [TournamentFormComponent, TournamentFinalComponent],
    exports: [TournamentFormComponent, TournamentFinalComponent],
    imports: [
        CommonModule,
        DynamicModule,
        FormsModule,
        NzButtonModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzDescriptionsModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzListModule,
        NzRadioModule,
        NzSelectModule,
        NzTabsModule,
        ReactiveFormsModule,
        CoreI18nModule,
        DomainSportGroupFormModule,
    ],
})
export class DomainSportCompetitionTournamentFormModule {}
