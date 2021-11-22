import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RoleStateService } from '@zsport/api';

@Injectable()
export class RoleListResolverService implements Resolve<void> {
    constructor(private roleStateService: RoleStateService) {}

    public resolve(): void {
        this.roleStateService.dispatchListEntitiesAction();
        this.roleStateService.dispatchSetSelectedEntityIdAction('');
        this.roleStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
