import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Entity, RoleStateService } from '@zsport/api';
import { RoleFormFactory } from '@zsport/domain/role/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class ZsportAdminRoleFormFactoryImpl extends RoleFormFactory {
    public constructor(private roleStateService: RoleStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<Entity | undefined> {
        return this.roleStateService.selectSelectedEntity$();
    }
}
