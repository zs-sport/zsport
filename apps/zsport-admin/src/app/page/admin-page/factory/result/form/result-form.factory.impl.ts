import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Entity, ResultStateService } from '@zsport/api';
import { ResultFormFactory } from '@zsport/domain/sport/result/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class ResultFormFactoryImpl extends ResultFormFactory {
    public constructor(private resultStateService: ResultStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<Entity | undefined> {
        return this.resultStateService.selectSelectedEntity$();
    }
}
