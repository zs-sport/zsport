import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { distinct, filter, switchMap } from 'rxjs/operators';

import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    CompetitionStateService,
    Event,
    EventEntity,
    EventList,
    EventStateService,
    EventUtilService,
    Gender,
    GroupLevel,
    Team,
    TeamStateService,
    Tournament,
} from '@zsport/api';
import { EventCompetitionFormComponent } from '@zsport/domain/sport/event/competition-form';

import { TournamentFinalBase } from '../../base';

@Injectable()
export class TournamentFinalService extends TournamentFinalBase {
    private events: Event[] = [];
    private teams: Team[] = [];
    private tempGroupLevelIndex: number = -1;
    private tempGroupTitle: string = '';
    private tournament: Tournament | null = null;

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private competitionStateService: CompetitionStateService,
        private eventStateService: EventStateService,
        private eventUtilService: EventUtilService,
        private teamStateService: TeamStateService
    ) {
        super();

        this.event$$ = new ReplaySubject();
        this.ageGroups$$ = new ReplaySubject();
        this.genders$$ = new ReplaySubject();
        this.categories$$ = new ReplaySubject();
        this.teams$$ = new ReplaySubject();
        this.locations$$ = new ReplaySubject();
        this.eventList$$ = new ReplaySubject();
        this.events$$ = [];
    }

    public addEventHandler(indexTitle: KeyValue<number, string>): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(2);

        const event: Partial<EventEntity> = this.eventUtilService.createEventForCompetition(
            this.tournament!.ageGroup,
            this.tournament!.category,
            this.tournament!.gender,
            this.tournament!.uid || '',
            indexTitle.key
        );

        this.tempGroupLevelIndex = indexTitle.key;
        this.tempGroupTitle = indexTitle.value;

        this.activateEventFormComponent();

        this.ageGroups$$.next([this.tournament!.ageGroup]);
        this.genders$$.next([this.tournament!.gender]);
        this.categories$$.next([this.tournament!.category]);
        this.event$$.next(event);
        this.teams$$.next(this.teams);
        this.locations$$.next(this.tournament!.locations);
    }

    public editEventHandler(event: Event): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(2);

        const editedEvent: Event = {
            ...event,
        };

        this.activateEventFormComponent();

        this.ageGroups$$.next([this.tournament!.ageGroup]);
        this.genders$$.next([this.tournament!.gender]);
        this.categories$$.next([this.tournament!.category]);
        this.event$$.next(editedEvent);
        this.teams$$.next(this.teams);
        this.locations$$.next(this.tournament!.locations);
    }

    public eventUpdateHandler(event: Event): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(1);

        if (event.uid) {
            this.updateEvent(event);
        } else {
            this.createEvent(event);
        }
    }

    public init$(
        tournament$: Observable<Tournament>,
        dynamicEventFormComponent$$: Subject<any>,
        dynamicEventFormInputs$$: Subject<any>,
        dynamicEventFormOutputs$$: Subject<any>
    ): Observable<boolean> {
        this.tournament$$ = tournament$;
        this.dynamicEventFormComponent$$ = dynamicEventFormComponent$$;
        this.dynamicEventFormInputs$$ = dynamicEventFormInputs$$;
        this.dynamicEventFormOutputs$$ = dynamicEventFormOutputs$$;
        this.selectedFinalTabId$ = this.competitionStateService.selectSelectedFinalTabId$();

        return this.tournament$$.pipe(
            filter((tournament) => !!tournament.ageGroup),
            switchMap((tournament) => {
                this.tournament = tournament;
                this.events$$ = [];

                const aggcId = this.generateAGGCId(
                    this.tournament.ageGroup,
                    this.tournament.gender,
                    this.tournament.category
                );
                const clubIds: string[] = this.tournament.clubs.map((club) => club.uid || '');

                this.teamStateService.dispatchListTeamByAGGCIdAndClubIds(aggcId, clubIds);

                if (this.tournament && !this.tournament.groupLevels) {
                    tournament.groupLevels = [];
                }

                tournament.groupLevels.forEach((groupLevel) => {
                    this.events$$.push(new ReplaySubject<Map<string, (Event | undefined)[]> | undefined>());
                });

                if (this.tournament.uid) {
                    this.competitionStateService.dispatchListEventsByCompetitionId(this.tournament.uid);
                }

                this.eventNumber = this.tournament.clubs.length / 2;

                return combineLatest([
                    this.teamStateService
                        .selectTeamsByAGGCIdAndClubIds$(aggcId, clubIds)
                        .pipe(distinct((teams) => teams.length)),
                    this.eventStateService
                        .selectEventsByCompetitionId(this.tournament.uid || '')
                        .pipe(distinct((events) => events.length)),
                ]).pipe(
                    switchMap(([teams, events]) => {
                        this.teams = teams;
                        this.events = events;

                        if (events.length) {
                            const eventsGroupLevelMap: Map<number, Map<string, (Event | undefined)[]> | undefined> =
                                this.separateEvents(events, this.tournament!.groupLevels);

                            this.eventList$$.next(this.createEventLists(this.events));
                            this.events$$.forEach((event$$, index) => {
                                const separatedEvents: Map<string, (Event | undefined)[]> | undefined =
                                    eventsGroupLevelMap.get(index);

                                event$$.next(separatedEvents);
                            });
                        }

                        return of(true);
                    })
                );
            })
        );
    }

    public onTab0Click(): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(0);
    }

    public onTab1Click(): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(1);
    }

    public onTab2Click(): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(2);
    }

    private activateEventFormComponent() {
        this.dynamicEventFormComponent$$.next(EventCompetitionFormComponent);

        this.dynamicEventFormInputs$$.next({
            event$: this.event$$.asObservable(),
            ageGroups$: this.ageGroups$$.asObservable(),
            categories$: this.categories$$.asObservable(),
            genders$: this.genders$$.asObservable(),
            teams$: this.teams$$.asObservable(),
            locations$: this.locations$$.asObservable(),
        });

        this.dynamicEventFormOutputs$$.next({
            eventUpdate: (newEvent: Event) => {
                this.eventUpdateHandler(newEvent);
            },
        });
    }

    private createEvent(eventModel: any) {
        this.competitionStateService.dispatchAddEventByGroupLevelIndexGroupTitle(
            eventModel,
            this.tempGroupLevelIndex,
            this.tempGroupTitle
        );
    }

    private createEventLists(events: Event[]): EventList[] {
        const eventMap: Map<number | Date, EventList> = new Map();

        events
            .sort((a, b) => (a.eventDayTime < b.eventDayTime ? -1 : 1))
            .forEach((event) => {
                let tempEvents: EventList | null = eventMap.get(event.eventDayTime) || null;

                if (!tempEvents) {
                    tempEvents = {
                        eventDayTime: event.eventDayTime,
                        events: [event],
                    };
                } else {
                    tempEvents.events.push(event);
                }

                eventMap.set(event.eventDayTime, tempEvents);
            });

        return Array.from(eventMap.values());
    }

    private generateAGGCId(ageGroup: AgeGroup, gender: Gender, category: Category): string {
        return `${ageGroup.uid}_${gender.uid}_${category.uid}`;
    }

    private initializeEventsMap(groupLevels: GroupLevel[]): Map<number, Map<string, Event[]>> {
        const eventsGroupLevelMap: Map<number, Map<string, Event[]>> = new Map();

        groupLevels.forEach((groupLevel) => eventsGroupLevelMap.set(groupLevel.level, new Map()));

        return eventsGroupLevelMap;
    }

    private separateEvents(
        events: Event[],
        groupLevels: GroupLevel[]
    ): Map<number, Map<string, (Event | undefined)[]> | undefined> {
        const eventsGroupLevelMap: Map<number, Map<string, (Event | undefined)[]> | undefined> =
            this.initializeEventsMap(groupLevels);
        const eventsMap: Map<string, Event | undefined> = new Map();

        events.forEach((event) => eventsMap.set(event.uid || '', event));

        groupLevels.forEach((groupLevel) => {
            const groupEventsMap: Map<string, (Event | undefined)[]> | undefined = eventsGroupLevelMap.get(
                groupLevel.level
            );

            groupLevel.groups?.forEach((group) => {
                const events: (Event | undefined)[] = [];

                group.eventIds.forEach((eventId) => events.push(eventsMap.get(eventId)));

                groupEventsMap?.set(group.title, events);
            });

            eventsGroupLevelMap.set(groupLevel.level, groupEventsMap);
        });

        return eventsGroupLevelMap;
    }

    private updateEvent(event: Event): void {
        this.competitionStateService.dispatchUpdateEventByCompetitionId(event);
    }
}
