import { Observable, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { BaseService, Competition, CompetitionStateService, EventStateService } from '@zsport/api';

@Injectable()
export class EventAdminService extends BaseService {
    private competitions$$!: Subject<Competition[]>;

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private competitionStateService: CompetitionStateService,
        private eventStateService: EventStateService
    ) {
        super();
    }

    public init$(competitions$$: Subject<Competition[]>): Observable<boolean> {
        this.competitions$$ = competitions$$;

        this.competitionStateService.dispatchListEntitiesAction();

        return this.competitionStateService.selectEntities$().pipe(
            tap((entities) => {
                this.competitions$$.next(entities as Competition[]);
            }),
            switchMap(() => of(true))
        );
    }

    public onCompetitionChangeHandler(competition: Competition): void {
        this.eventStateService.dispatchListEventsByCompetitionId(competition.uid || '');
    }
}
