import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { TeamEntity, TeamStateService } from '@zsport/api';
import { TeamFormFactory } from '@zsport/domain/sport/team/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class TeamFormFactoryImpl extends TeamFormFactory {
    public constructor(private teamStateService: TeamStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<TeamEntity> {
        return this.teamStateService.selectSelectedEntity$().pipe(map((entity) => entity as TeamEntity));
    }
}
