import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RoleStateService } from '@zsport/api';

@Injectable()
export class RoleEditResolverService implements Resolve<void> {
    public constructor(private roleStateService: RoleStateService) {}

    public resolve(): void | Observable<void> | Promise<void> {
        this.roleStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
