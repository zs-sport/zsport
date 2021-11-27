import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TeamStateService } from '@zsport/api';

@Injectable()
export class TeamListResolverService implements Resolve<void> {
    constructor(private teamStateService: TeamStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.teamStateService.dispatchListEntitiesAction();
        this.teamStateService.dispatchSetSelectedEntityIdAction('');
        this.teamStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
