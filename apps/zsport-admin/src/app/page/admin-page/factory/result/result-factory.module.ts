import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ResultFormButtonFactory,
    ResultFormConfigFactory,
    ResultFormControlFactory,
    ResultFormFactory,
} from '@zsport/domain/sport/result/form';
import { ResultTableFactory } from '@zsport/domain/sport/result/table';

import { ResultFormFactoryImpl } from './form';
import { ResultFormButtonFactoryImpl } from './form-button';
import { ResultFormConfigFactoryImpl } from './form-config';
import { ResultFormControlFactoryImpl } from './form-control';
import { ResultTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ResultFormButtonFactory,
            useClass: ResultFormButtonFactoryImpl,
        },
        {
            provide: ResultFormConfigFactory,
            useClass: ResultFormConfigFactoryImpl,
        },
        {
            provide: ResultFormControlFactory,
            useClass: ResultFormControlFactoryImpl,
        },
        {
            provide: ResultFormFactory,
            useClass: ResultFormFactoryImpl,
        },
        {
            provide: ResultTableFactory,
            useClass: ResultTableFactoryImpl,
        },
    ],
})
export class ResultFactoryModule {}
