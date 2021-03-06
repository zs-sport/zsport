import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { UserEntity, UserStateService } from '@zsport/api';
import { UserFormFactory } from '@zsport/domain/user/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class ZsportAdminUserFormFactoryImpl extends UserFormFactory {
    public constructor(private userStateService: UserStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(uid: string): Observable<UserEntity | undefined> {
        return this.userStateService.selectEntityById$(uid);
    }
}
