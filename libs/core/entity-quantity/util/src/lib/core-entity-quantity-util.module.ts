import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityQuantityUtilService } from '@zsport/api';

import { EntityQuantityUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: EntityQuantityUtilService,
            useClass: EntityQuantityUtilServiceImpl,
        },
    ],
})
export class CoreEntityQuantityUtilModule {}
