import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    Championship,
    CompetitionStateService,
    Event,
    EventEntity,
    EventList,
    EventStateService,
    EventUtilService,
    Gender,
    I18nService,
    Round,
    Team,
    TeamStateService,
} from '@zsport/api';
import { EventCompetitionFormComponent } from '@zsport/domain/sport/event/competition-form';

import { ChampionshipFinalBase } from '../../base';

@Injectable()
export class ChampionshipFinalService extends ChampionshipFinalBase {
    private championship: Championship | null = null;
    private events: Event[] = [];
    private teams: Team[] = [];

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private competitionStateService: CompetitionStateService,
        private i18nService: I18nService,
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
        this.eventList$$ = new ReplaySubject();
        this.events$$ = [];
    }

    public addEventHandler(index: number): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(2);

        const event: Partial<EventEntity> = this.eventUtilService.createEventForCompetition(
            this.championship!.ageGroup,
            this.championship!.category,
            this.championship!.gender,
            this.championship!.uid || '',
            index
        );

        this.activateEventFormComponent();

        this.ageGroups$$.next([this.championship!.ageGroup]);
        this.genders$$.next([this.championship!.gender]);
        this.categories$$.next([this.championship!.category]);
        this.event$$.next(event);
        this.teams$$.next(this.teams);
    }

    public editEventHandler(event: Event): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(2);

        const editedEvent: Event = {
            ...event,
        };

        this.activateEventFormComponent();

        this.ageGroups$$.next([this.championship!.ageGroup]);
        this.genders$$.next([this.championship!.gender]);
        this.categories$$.next([this.championship!.category]);
        this.event$$.next(editedEvent);
        this.teams$$.next(this.teams);
    }

    public eventUpdateHandler(event: Event): void {
        this.competitionStateService.dispatchChangeSelectedfinalTabId(1);

        if (event.uid) {
            this.updateEvent(event);
        } else {
            this.createEvent(event);
        }
    }

    public init$(championship$: Observable<Championship>): Observable<boolean> {
        this.championship$ = championship$;
        this.dynamicEventFormComponent$$ = new ReplaySubject();
        this.dynamicEventFormInputs$$ = new ReplaySubject();
        this.dynamicEventFormOutputs$$ = new ReplaySubject();
        this.selectedFinalTabId$ = this.competitionStateService.selectSelectedFinalTabId$();

        return this.championship$.pipe(
            filter((championship) => !!championship.ageGroup),
            switchMap((championship) => {
                this.championship = championship;
                this.events$$ = [];

                const aggcId = this.generateAGGCId(championship.ageGroup, championship.gender, championship.category);
                const clubIds: string[] = championship.clubs.map((club) => club.uid || '');

                this.teamStateService.dispatchListTeamByAGGCIdAndClubIds(aggcId, clubIds);

                if (championship && !championship.rounds) {
                    championship.rounds = [];

                    for (let i = 0; i < championship.clubs.length - 1; i++) {
                        championship.rounds.push({
                            index: i,
                            competitionId: championship.uid || '',
                            eventIds: [],
                        });
                    }
                }

                championship.rounds.forEach((round) => {
                    this.events$$.push(new ReplaySubject<Event[]>());
                });

                this.competitionStateService.dispatchListEventsByCompetitionId(championship.uid || '');

                this.eventNumber = championship.clubs.length / 2;

                return combineLatest([
                    this.teamStateService.selectTeamsByAGGCIdAndClubIds$(aggcId, clubIds),
                    this.eventStateService.selectEventsByCompetitionId(this.championship.uid || ''),
                ]).pipe(
                    switchMap(([teams, events]) => {
                        this.teams = teams;
                        this.events = events;

                        const eventesMap = this.separateEventes(events, this.championship!.rounds);

                        this.eventList$$.next(this.createEventLists(this.events));

                        this.events$$.forEach((event$$, index) => {
                            const sortedEventes: Event[] = eventesMap.get(index) || [];

                            event$$.next(
                                sortedEventes.sort((a, b) =>
                                    (a as Event).eventDayTime < (b as Event).eventDayTime ? -1 : 1
                                )
                            );
                        });

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
            sportCategories$: this.categories$$.asObservable(),
            genders$: this.genders$$.asObservable(),
            sportTeams$: this.teams$$.asObservable(),
        });

        this.dynamicEventFormOutputs$$.next({
            eventUpdate: (newEvent: Event) => {
                this.eventUpdateHandler(newEvent);
            },
        });
    }

    private createEvent(eventModel: any) {
        this.competitionStateService.dispatchAddEventByCompetitionId(eventModel);
    }

    private createEventLists(eventes: Event[]): EventList[] {
        const eventMap: Map<number | Date, EventList> = new Map();

        eventes
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

    private initializeEventesMap(rounds: Round[]): Map<number, Event[]> {
        const eventesMap: Map<number, Event[]> = new Map();

        rounds.forEach((round) => eventesMap.set(round.index, []));

        return eventesMap;
    }

    private separateEventes(eventes: Event[], rounds: Round[]): Map<number, Event[]> {
        const eventesMap: Map<number, Event[]> = this.initializeEventesMap(rounds);

        eventes.forEach((event) => {
            let tempEventes: Event[] | null = eventesMap.get(event.roundId || 0) || null;

            if (!tempEventes) {
                tempEventes = [event];
            } else {
                tempEventes.push(event);
            }

            eventesMap.set(event.roundId || 0, tempEventes);
        });

        return eventesMap;
    }

    private updateEvent(event: Event): void {
        this.competitionStateService.dispatchUpdateEventByCompetitionId(event);
    }
}
