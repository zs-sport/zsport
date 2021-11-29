import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    EventFormButtonFactory,
    EventFormConfigFactory,
    EventFormControlFactory,
    EventFormFactory,
} from '@zsport/domain/sport/event/form';
import { EventTableFactory } from '@zsport/domain/sport/event/table';

import { EventFormFactoryImpl } from './form';
import { EventFormButtonFactoryImpl } from './form-button';
import { EventFormConfigFactoryImpl } from './form-config';
import { EventFormControlFactoryImpl } from './form-control';
import { EventTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: EventFormButtonFactory,
            useClass: EventFormButtonFactoryImpl,
        },
        {
            provide: EventFormConfigFactory,
            useClass: EventFormConfigFactoryImpl,
        },
        {
            provide: EventFormControlFactory,
            useClass: EventFormControlFactoryImpl,
        },
        {
            provide: EventFormFactory,
            useClass: EventFormFactoryImpl,
        },
        {
            provide: EventTableFactory,
            useClass: EventTableFactoryImpl,
        },
    ],
})
export class EventFactoryModule {}
