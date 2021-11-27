import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { PersonEntity, PersonStateService } from '@zsport/api';
import { PersonFormFactory } from '@zsport/domain/person/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class PersonFormFactoryImpl extends PersonFormFactory {
    public constructor(private personStateService: PersonStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<PersonEntity> {
        return this.personStateService.selectSelectedEntity$().pipe(map((entity) => entity as PersonEntity));
    }
}
