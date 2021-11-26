import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LocationStateService } from '@zsport/api';

@Injectable()
export class LocationEditResolverService implements Resolve<void> {
    public constructor(private locationStateService: LocationStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.locationStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
