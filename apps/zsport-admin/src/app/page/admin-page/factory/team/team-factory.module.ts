import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    TeamFormButtonFactory,
    TeamFormConfigFactory,
    TeamFormControlFactory,
    TeamFormFactory,
} from '@zsport/domain/sport/team/form';
import { TeamTableFactory } from '@zsport/domain/sport/team/table';

import { TeamFormFactoryImpl } from './form';
import { TeamFormButtonFactoryImpl } from './form-button';
import { TeamFormConfigFactoryImpl } from './form-config';
import { TeamFormControlFactoryImpl } from './form-control';
import { TeamTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: TeamFormButtonFactory,
            useClass: TeamFormButtonFactoryImpl,
        },
        {
            provide: TeamFormConfigFactory,
            useClass: TeamFormConfigFactoryImpl,
        },
        {
            provide: TeamFormControlFactory,
            useClass: TeamFormControlFactoryImpl,
        },
        {
            provide: TeamFormFactory,
            useClass: TeamFormFactoryImpl,
        },
        {
            provide: TeamTableFactory,
            useClass: TeamTableFactoryImpl,
        },
    ],
})
export class TeamFactoryModule {}
