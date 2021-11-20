import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorageUtilService } from '@zsport/api';

import { StorageUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: StorageUtilService,
            useClass: StorageUtilServiceImpl,
        },
    ],
})
export class CoreStorageUtilModule {}
