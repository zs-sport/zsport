import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    LocationFormButtonFactory,
    LocationFormConfigFactory,
    LocationFormControlFactory,
    LocationFormFactory,
} from '@zsport/domain/location/form';
import { LocationTableFactory } from '@zsport/domain/location/table';

import { LocationFormFactoryImpl } from './form';
import { LocationFormButtonFactoryImpl } from './form-button';
import { LocationFormConfigFactoryImpl } from './form-config';
import { LocationFormControlFactoryImpl } from './form-control';
import { LocationTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: LocationFormButtonFactory,
            useClass: LocationFormButtonFactoryImpl,
        },
        {
            provide: LocationFormConfigFactory,
            useClass: LocationFormConfigFactoryImpl,
        },
        {
            provide: LocationFormControlFactory,
            useClass: LocationFormControlFactoryImpl,
        },
        {
            provide: LocationFormFactory,
            useClass: LocationFormFactoryImpl,
        },
        {
            provide: LocationTableFactory,
            useClass: LocationTableFactoryImpl,
        },
    ],
})
export class LocationFactoryModule {}
