import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CompetitionEntity, CompetitionStateService } from '@zsport/api';
import { CompetitionFormFactory } from '@zsport/domain/sport/competition/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class CompetitionFormFactoryImpl extends CompetitionFormFactory {
    public constructor(private competitionStateService: CompetitionStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<CompetitionEntity> {
        return this.competitionStateService.selectSelectedEntity$().pipe(map((entity) => entity as CompetitionEntity));
    }
}
