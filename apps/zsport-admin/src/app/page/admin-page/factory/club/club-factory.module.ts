import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ClubFormButtonFactory,
    ClubFormConfigFactory,
    ClubFormControlFactory,
    ClubFormFactory,
} from '@zsport/domain/sport/club/form';
import { ClubTableFactory } from '@zsport/domain/sport/club/table';

import { ClubFormFactoryImpl } from './form';
import { ClubFormButtonFactoryImpl } from './form-button';
import { ClubFormConfigFactoryImpl } from './form-config';
import { ClubFormControlFactoryImpl } from './form-control';
import { ClubTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ClubFormButtonFactory,
            useClass: ClubFormButtonFactoryImpl,
        },
        {
            provide: ClubFormConfigFactory,
            useClass: ClubFormConfigFactoryImpl,
        },
        {
            provide: ClubFormControlFactory,
            useClass: ClubFormControlFactoryImpl,
        },
        {
            provide: ClubFormFactory,
            useClass: ClubFormFactoryImpl,
        },
        {
            provide: ClubTableFactory,
            useClass: ClubTableFactoryImpl,
        },
    ],
})
export class ClubFactoryModule {}
