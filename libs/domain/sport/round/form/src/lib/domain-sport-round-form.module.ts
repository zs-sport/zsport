import { NzCardModule } from 'ng-zorro-antd/card';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoundFormComponent } from './component';

@NgModule({
    declarations: [RoundFormComponent],
    exports: [RoundFormComponent],
    imports: [CommonModule, NzCardModule],
})
export class DomainSportRoundFormModule {}
