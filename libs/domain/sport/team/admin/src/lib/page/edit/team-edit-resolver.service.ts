import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TeamStateService } from '@zsport/api';

@Injectable()
export class TeamEditResolverService implements Resolve<void> {
    public constructor(private teamStateService: TeamStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.teamStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
