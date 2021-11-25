import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ClubEntity, ClubStateService } from '@zsport/api';
import { ClubFormFactory } from '@zsport/domain/sport/club/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class ClubFormFactoryImpl extends ClubFormFactory {
    public constructor(private clubStateService: ClubStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<ClubEntity> {
        return this.clubStateService.selectSelectedEntity$().pipe(map((entity) => entity as ClubEntity));
    }
}
