import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateUtilService } from '@zsport/api';

import { StateUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: StateUtilService,
            useClass: StateUtilServiceImpl,
        },
    ],
})
export class StateUtilModule {}
