import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    CompetitionFormButtonFactory,
    CompetitionFormConfigFactory,
    CompetitionFormControlFactory,
    CompetitionFormFactory,
} from '@zsport/domain/sport/competition/form';
import { CompetitionTableFactory } from '@zsport/domain/sport/competition/table';

import { CompetitionFormFactoryImpl } from './form';
import { CompetitionFormButtonFactoryImpl } from './form-button';
import { CompetitionFormConfigFactoryImpl } from './form-config';
import { CompetitionFormControlFactoryImpl } from './form-control';
import { CompetitionTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CompetitionFormButtonFactory,
            useClass: CompetitionFormButtonFactoryImpl,
        },
        {
            provide: CompetitionFormConfigFactory,
            useClass: CompetitionFormConfigFactoryImpl,
        },
        {
            provide: CompetitionFormControlFactory,
            useClass: CompetitionFormControlFactoryImpl,
        },
        {
            provide: CompetitionFormFactory,
            useClass: CompetitionFormFactoryImpl,
        },
        {
            provide: CompetitionTableFactory,
            useClass: CompetitionTableFactoryImpl,
        },
    ],
})
export class CompetitionFactoryModule {}
