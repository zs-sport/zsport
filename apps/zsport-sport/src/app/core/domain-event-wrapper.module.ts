import { NgModule } from '@angular/core';
import { DomainSportEventDataModule } from '@zsport/domain/sport/event/data';
import { DomainSportEventStoreModule } from '@zsport/domain/sport/event/store';
import { DomainSportEventUtilModule } from '@zsport/domain/sport/event/util';

@NgModule({
    declarations: [],
    exports: [DomainSportEventDataModule, DomainSportEventStoreModule, DomainSportEventUtilModule],
    imports: [DomainSportEventDataModule, DomainSportEventStoreModule, DomainSportEventUtilModule],
})
export class DomainEventWrapperModule {}
