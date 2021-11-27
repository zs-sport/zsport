import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillSetUtilService } from '@zsport/api';

import { SkillSetUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: SkillSetUtilService,
            useClass: SkillSetUtilServiceImpl,
        },
    ],
})
export class DomainSkillSetUtilModule {}
