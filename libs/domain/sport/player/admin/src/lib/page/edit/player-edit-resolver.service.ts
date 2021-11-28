import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PersonStateService, PlayerStateService } from '@zsport/api';

@Injectable()
export class PlayerEditResolverService implements Resolve<void> {
    public constructor(
        private personStateService: PersonStateService,
        private playerStateService: PlayerStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.playerStateService.dispatchChangeNewEntityButtonEnabled(false);
        this.personStateService.dispatchListEntitiesAction();
    }
}
