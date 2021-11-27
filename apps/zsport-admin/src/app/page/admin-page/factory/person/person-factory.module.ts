import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    PersonFormButtonFactory,
    PersonFormConfigFactory,
    PersonFormControlFactory,
    PersonFormFactory,
} from '@zsport/domain/person/form';
import { PersonTableFactory } from '@zsport/domain/person/table';

import { PersonFormFactoryImpl } from './form';
import { PersonFormButtonFactoryImpl } from './form-button';
import { PersonFormConfigFactoryImpl } from './form-config';
import { PersonFormControlFactoryImpl } from './form-control';
import { PersonTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PersonFormButtonFactory,
            useClass: PersonFormButtonFactoryImpl,
        },
        {
            provide: PersonFormConfigFactory,
            useClass: PersonFormConfigFactoryImpl,
        },
        {
            provide: PersonFormControlFactory,
            useClass: PersonFormControlFactoryImpl,
        },
        {
            provide: PersonFormFactory,
            useClass: PersonFormFactoryImpl,
        },
        {
            provide: PersonTableFactory,
            useClass: PersonTableFactoryImpl,
        },
    ],
})
export class PersonFactoryModule {}
