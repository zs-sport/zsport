import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorageDataService } from '@zsport/api';

import { StorageDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: StorageDataService,
            useClass: StorageDataServiceImpl,
        },
    ],
})
export class CoreStorageDataModule {}
