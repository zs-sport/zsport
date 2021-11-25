import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AssociationEntity, AssociationStateService, Entity } from '@zsport/api';
import { AssociationFormFactory } from '@zsport/domain/sport/association/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class AssociationFormFactoryImpl extends AssociationFormFactory {
    public constructor(private associationStateService: AssociationStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<AssociationEntity> {
        return this.associationStateService.selectSelectedEntity$().pipe(map((entity) => entity as AssociationEntity));
    }
}
