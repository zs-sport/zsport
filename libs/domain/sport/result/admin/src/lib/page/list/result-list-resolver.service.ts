import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ResultStateService } from '@zsport/api';

@Injectable()
export class ResultListResolverService implements Resolve<void> {
    constructor(private resultStateService: ResultStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        const eventId: string | null = this.findParam('eventId', [route]);

        this.resultStateService.dispatchListResultsByEventIdAction(eventId || '');
        this.resultStateService.dispatchSetSelectedEntityIdAction('');
        this.resultStateService.dispatchChangeNewEntityButtonEnabled(true);
    }

    protected findParam(paramName: string, snapshots: ActivatedRouteSnapshot[]): string | null {
        return snapshots ? snapshots.map((snapshot) => snapshot.queryParams[paramName]).find((param) => !!param) : null;
    }
}
