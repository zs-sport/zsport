import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CategoryStateService } from '@zsport/api';

@Injectable()
export class CategoryEditResolverService implements Resolve<void> {
    public constructor(private categoryStateService: CategoryStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.categoryStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
