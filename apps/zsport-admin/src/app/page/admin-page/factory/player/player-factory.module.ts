import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    PlayerFormButtonFactory,
    PlayerFormConfigFactory,
    PlayerFormControlFactory,
    PlayerFormFactory,
} from '@zsport/domain/sport/player/form';
import { PlayerTableFactory } from '@zsport/domain/sport/player/table';

import { PlayerFormFactoryImpl } from './form';
import { PlayerFormButtonFactoryImpl } from './form-button';
import { PlayerFormConfigFactoryImpl } from './form-config';
import { PlayerFormControlFactoryImpl } from './form-control';
import { PlayerTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PlayerFormButtonFactory,
            useClass: PlayerFormButtonFactoryImpl,
        },
        {
            provide: PlayerFormConfigFactory,
            useClass: PlayerFormConfigFactoryImpl,
        },
        {
            provide: PlayerFormControlFactory,
            useClass: PlayerFormControlFactoryImpl,
        },
        {
            provide: PlayerFormFactory,
            useClass: PlayerFormFactoryImpl,
        },
        {
            provide: PlayerTableFactory,
            useClass: PlayerTableFactoryImpl,
        },
    ],
})
export class PlayerFactoryModule {}
