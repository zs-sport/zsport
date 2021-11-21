import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RoleStateService, UserStateService } from '@zsport/api';

@Injectable()
export class EditResolverService implements Resolve<void> {
    public constructor(private roleStateService: RoleStateService, private userStateService: UserStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.userStateService.dispatchLoadEntityAction(route.params.userId);

        this.roleStateService.dispatchListEntitiesAction();
    }
}
