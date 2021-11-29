import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportCompetitionChampionshipFormModule } from '@zsport/domain/sport/competition/championship-form';

import { CompetitionFormComponent } from './component';

@NgModule({
    declarations: [CompetitionFormComponent],
    exports: [CompetitionFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        CoreI18nModule,
        DomainSportCompetitionChampionshipFormModule,
        NzButtonModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzListModule,
        NzSelectModule,
        NzStepsModule,
        ReactiveFormsModule,
    ],
})
export class DomainSportCompetitionFormModule {}
