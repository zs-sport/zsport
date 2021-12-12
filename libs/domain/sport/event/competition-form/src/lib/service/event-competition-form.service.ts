import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { AgeGroup, Category, Event, EventEntity, Gender, Location, Team } from '@zsport/api';

import { EventCompetitionFormBase } from '../base';
import {
    EventCompetitionFormButtonFactory,
    EventCompetitionFormConfigFactory,
    EventCompetitionFormControlFactory,
    EventCompetitionFormFactory,
} from '../factory';

@Injectable()
export class EventCompetitionFormService extends EventCompetitionFormBase {
    constructor(
        private eventCompetitionFormButtonFactory: EventCompetitionFormButtonFactory,
        private eventCompetitionFormConfigFactory: EventCompetitionFormConfigFactory,
        private eventCompetitionFormControlFactory: EventCompetitionFormControlFactory,
        private eventCompetitionFromFactory: EventCompetitionFormFactory
    ) {
        super();
    }

    public init$(
        event$: Observable<Event>,
        ageGroups$: Observable<AgeGroup[]>,
        categories$: Observable<Category[]>,
        genders$: Observable<Gender[]>,
        teams$: Observable<Team[]>,
        locations$: Observable<Location[]>,
        eventUpdate: EventEmitter<EventEntity>,
        formValueChange: EventEmitter<Event>
    ): Observable<boolean> {
        this.event$ = event$;
        this.ageGroups$ = ageGroups$;
        this.genders$ = genders$;
        this.teams$ = teams$;
        this.eventUpdate = eventUpdate;
        this.formValueChange = formValueChange;
        this.dynamicComponent$$ = new ReplaySubject();
        this.dynamicInputs$$ = new ReplaySubject();

        combineLatest([event$, categories$, genders$, ageGroups$, teams$, locations$])
            .pipe(
                switchMap(([event, categories, genders, ageGroups, teams, locations]) => {
                    return this.eventCompetitionFormControlFactory.createFormControlsForEvent$(
                        event,
                        categories,
                        genders,
                        ageGroups,
                        teams,
                        locations
                    );
                }),
                tap((controls) => {
                    this.dynamicComponent$$.next(this.eventCompetitionFromFactory.createDynamicComponent());
                    this.dynamicInputs$$.next({
                        buttons: this.eventCompetitionFormButtonFactory.createFormButtons(this.eventUpdate),
                        config: this.eventCompetitionFormConfigFactory.createFormConfig(),
                        controls,
                    });
                })
            )
            .subscribe();

        return of(true);
    }
}
