import { DynamicModule } from 'ng-dynamic-component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportRoundFormModule } from '@zsport/domain/sport/round/form';

import { TournamentFinalComponent, TournamentFormComponent } from './component';

@NgModule({
    declarations: [TournamentFormComponent, TournamentFinalComponent],
    exports: [TournamentFormComponent, TournamentFinalComponent],
    imports: [
        CommonModule,
        DynamicModule,
        FormsModule,
        NzCollapseModule,
        NzDescriptionsModule,
        NzFormModule,
        NzInputNumberModule,
        NzListModule,
        NzRadioModule,
        NzSelectModule,
        NzTabsModule,
        ReactiveFormsModule,
        CoreI18nModule,
        DomainSportRoundFormModule,
    ],
})
export class DomainSportCompetitionTournamentFormModule {}
