import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CategoryStateService, LocationStateService, EventStateService } from '@zsport/api';

@Injectable()
export class EventEditResolverService implements Resolve<void> {
    public constructor(
        private categorystateService: CategoryStateService,
        private locationStateService: LocationStateService,
        private eventStateService: EventStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.eventStateService.dispatchChangeNewEntityButtonEnabled(false);

        this.categorystateService.dispatchListEntitiesAction();
        this.locationStateService.dispatchListEntitiesAction();
    }
}
