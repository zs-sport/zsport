import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    CategoryFormButtonFactory,
    CategoryFormConfigFactory,
    CategoryFormControlFactory,
    CategoryFormFactory,
} from '@zsport/domain/sport/category/form';
import { CategoryTableFactory } from '@zsport/domain/sport/category/table';

import { CategoryFormFactoryImpl } from './form';
import { CategoryFormButtonFactoryImpl } from './form-button';
import { CategoryFormConfigFactoryImpl } from './form-config';
import { CategoryFormControlFactoryImpl } from './form-control';
import { CategoryTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CategoryFormButtonFactory,
            useClass: CategoryFormButtonFactoryImpl,
        },
        {
            provide: CategoryFormConfigFactory,
            useClass: CategoryFormConfigFactoryImpl,
        },
        {
            provide: CategoryFormControlFactory,
            useClass: CategoryFormControlFactoryImpl,
        },
        {
            provide: CategoryFormFactory,
            useClass: CategoryFormFactoryImpl,
        },
        {
            provide: CategoryTableFactory,
            useClass: CategoryTableFactoryImpl,
        },
    ],
})
export class CategoryFactoryModule {}
