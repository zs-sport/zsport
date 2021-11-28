import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PlayerStateService } from '@zsport/api';

@Injectable()
export class PlayerListResolverService implements Resolve<void> {
    constructor(private playerStateService: PlayerStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.playerStateService.dispatchListEntitiesAction();
        this.playerStateService.dispatchSetSelectedEntityIdAction('');
        this.playerStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
