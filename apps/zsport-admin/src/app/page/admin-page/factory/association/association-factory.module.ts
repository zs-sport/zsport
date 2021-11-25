import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    AssociationFormButtonFactory,
    AssociationFormConfigFactory,
    AssociationFormControlFactory,
    AssociationFormFactory,
} from '@zsport/domain/sport/association/form';
import { AssociationTableFactory } from '@zsport/domain/sport/association/table';

import { AssociationFormFactoryImpl } from './form';
import { AssociationFormButtonFactoryImpl } from './form-button';
import { AssociationFormConfigFactoryImpl } from './form-config';
import { AssociationFormControlFactoryImpl } from './form-control';
import { AssociationTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: AssociationFormButtonFactory,
            useClass: AssociationFormButtonFactoryImpl,
        },
        {
            provide: AssociationFormConfigFactory,
            useClass: AssociationFormConfigFactoryImpl,
        },
        {
            provide: AssociationFormControlFactory,
            useClass: AssociationFormControlFactoryImpl,
        },
        {
            provide: AssociationFormFactory,
            useClass: AssociationFormFactoryImpl,
        },
        {
            provide: AssociationTableFactory,
            useClass: AssociationTableFactoryImpl,
        },
    ],
})
export class AssociationFactoryModule {}
