import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventStateService } from '@zsport/api';

@Injectable()
export class EventListResolverService implements Resolve<void> {
    constructor(private eventStateService: EventStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.eventStateService.dispatchSetSelectedEntityIdAction('');
        this.eventStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
