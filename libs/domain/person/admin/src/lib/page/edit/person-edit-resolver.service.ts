import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PersonStateService } from '@zsport/api';

@Injectable()
export class PersonEditResolverService implements Resolve<void> {
    public constructor(private personStateService: PersonStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.personStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
