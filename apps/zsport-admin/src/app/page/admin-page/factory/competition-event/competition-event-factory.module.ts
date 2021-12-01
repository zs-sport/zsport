import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    EventCompetitionFormButtonFactory,
    EventCompetitionFormConfigFactory,
    EventCompetitionFormControlFactory,
    EventCompetitionFormFactory,
} from '@zsport/domain/sport/event/competition-form';
import { EventTableFactory } from '@zsport/domain/sport/event/table';

import { CompetitionEventFormFactoryImpl } from './form';
import { CompetitionEventFormButtonFactoryImpl } from './form-button';
import { CompetitionEventFormConfigFactoryImpl } from './form-config';
import { CompetitionEventFormControlFactoryImpl } from './form-control';
import { CompetitionEventTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: EventCompetitionFormButtonFactory,
            useClass: CompetitionEventFormButtonFactoryImpl,
        },
        {
            provide: EventCompetitionFormConfigFactory,
            useClass: CompetitionEventFormConfigFactoryImpl,
        },
        {
            provide: EventCompetitionFormControlFactory,
            useClass: CompetitionEventFormControlFactoryImpl,
        },
        {
            provide: EventCompetitionFormFactory,
            useClass: CompetitionEventFormFactoryImpl,
        },
        {
            provide: EventTableFactory,
            useClass: CompetitionEventTableFactoryImpl,
        },
    ],
})
export class CompetitionEventFactoryModule {}
