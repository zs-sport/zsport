import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CompetitionStateService } from '@zsport/api';

@Injectable()
export class CompetitionListResolverService implements Resolve<void> {
    constructor(private competitionStateService: CompetitionStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.competitionStateService.dispatchListEntitiesAction();
        this.competitionStateService.dispatchSetSelectedEntityIdAction('');
        this.competitionStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
