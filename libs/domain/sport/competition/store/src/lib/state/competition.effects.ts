import { of } from 'rxjs';
import { map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    Competition,
    CompetitionDataService,
    CompetitionModel,
    CompetitionStateService,
    CompetitionUtilService,
    EntityQuantity,
    EntityQuantityEnum,
    EntityQuantityStateService,
    EntityQuantityUtilService,
    Event,
    EventEntity,
    EventModel,
    EventStateService,
    EventUtilService,
    Group,
    GroupLevel,
    Tournament,
} from '@zsport/api';

import * as competitionActions from './competition.actions';

@Injectable()
export class CompetitionEffects {
    public addCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addCompetition),
            switchMap((action) =>
                this.competitionDataService
                    .add$(this.competitionUtilService.convertEntityToModel(action.competition, false))
                    .pipe(
                        map((competitionModel) => {
                            return competitionActions.addCompetitionSuccess({
                                competition: this.competitionUtilService.convertModelToEntity(
                                    competitionModel
                                ) as Competition,
                            });
                        })
                    )
            )
        )
    );
    public addEventByCompetitionId = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addEventByCompetitionId),
            switchMap((action) =>
                this.competitionDataService
                    .addEventByCompetitionId(
                        this.eventUtilService.convertEntityToModel(action.event, false) as EventModel
                    )
                    .pipe(
                        map((eventModel) => {
                            return competitionActions.addEventByCompetitionIdSuccess({
                                event: this.eventUtilService.convertModelToEntity(eventModel) as Event,
                            });
                        })
                    )
            )
        )
    );
    public addEventByGroupLevelIndexGroupTitle = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addEventByGroupLevelIndexGroupTitleGroupTitle),
            withLatestFrom(this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_EVENT)),
            switchMap(([action, entityQuantity]) =>
                this.competitionDataService
                    .addEventByCompetitionId(
                        this.eventUtilService.convertEntityToModel(action.event, false) as EventModel
                    )
                    .pipe(
                        tap((eventModel) => {
                            entityQuantity =
                                entityQuantity ||
                                this.entityQuantityUtilService.createEntityQuantity(EntityQuantityEnum.SPORT_EVENT);

                            this.entityQuantityStateService.dispatchUpdateEntityAction(
                                this.eventUtilService.updateEntityQuantity(entityQuantity as EntityQuantity, eventModel)
                            );
                        }),
                        switchMap((eventModel) =>
                            this.competitionStateService.selectEntityById$(eventModel.competitionId || '').pipe(
                                take(1),
                                switchMap((competition) => {
                                    const groupMap: Map<string, Group> = new Map();
                                    const groupLevels: GroupLevel[] = [...(competition as Tournament).groupLevels];
                                    const groupLevel = groupLevels[action.index];

                                    (groupLevel.groups || []).forEach((group) => groupMap.set(group.title, group));

                                    let group: Group | undefined = groupMap.get(action.title);

                                    if (group) {
                                        group = { ...group, eventIds: [...group.eventIds] };
                                        group.eventIds.push(eventModel.uid || '');

                                        groupMap.set(group.title, group);

                                        groupLevels[action.index] = {
                                            ...groupLevel,
                                            groups: Array.from(groupMap.values()),
                                        };

                                        const updatedCompetition = {
                                            ...(competition as Tournament),
                                            groupLevels,
                                        } as Tournament;

                                        this.competitionStateService.dispatchUpdateEntityAction(updatedCompetition);
                                    }

                                    return of(eventModel);
                                })
                            )
                        ),
                        map((eventModel) => {
                            return competitionActions.addEventByGroupLevelIndexGroupTitleGrouptitleSuccess({
                                event: this.eventUtilService.convertModelToEntity(eventModel) as Event,
                            });
                        })
                    )
            )
        )
    );
    public listCompetitions = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.listCompetitions),
            switchMap((action) =>
                this.competitionDataService.list$().pipe(
                    map((competitionModels) => {
                        return competitionActions.listCompetitionsSuccess({
                            competitions: competitionModels.map(
                                (competitionModel) =>
                                    this.competitionUtilService.convertModelToEntity(competitionModel) as Competition
                            ),
                        });
                    })
                )
            )
        )
    );
    public listEventsByCompetitionId = createEffect(
        () =>
            this.actions$.pipe(
                ofType(competitionActions.listEventsByCompetitionId),
                mergeMap((action) =>
                    this.competitionDataService.listEventsByCompetitionId(action.competitionId).pipe(
                        tap((events) => {
                            this.eventStateService.dispatchListEventsByCompetitionIdSuccess(
                                events.map(
                                    (eventModel) =>
                                        this.eventUtilService.convertModelToEntity(eventModel) as EventEntity
                                )
                            );
                        })
                    )
                )
            ),
        { dispatch: false }
    );
    public loadCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.loadCompetition),
            switchMap((action) =>
                this.competitionDataService.load$(action.uid).pipe(
                    map((competition) => {
                        return competitionActions.loadCompetitionSuccess({
                            competition: competition as CompetitionModel,
                        });
                    })
                )
            )
        )
    );
    public updateCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.updateCompetition),
            switchMap((action) =>
                this.competitionDataService
                    .update$(this.competitionUtilService.convertEntityToModel(action.competition, false))
                    .pipe(
                        map((competitionModel) => {
                            return competitionActions.updateCompetitionSuccess({
                                competition: {
                                    id: competitionModel.uid || '',
                                    changes: this.competitionUtilService.convertModelToEntity(
                                        competitionModel
                                    ) as CompetitionModel,
                                },
                            });
                        })
                    )
            )
        )
    );
    public updateEventByCompetitionId = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.updateEventByCompetitionId),
            switchMap((action) =>
                this.competitionDataService
                    .updateEventByCompetitionId(
                        this.eventUtilService.convertEntityToModel(action.event, false) as EventModel
                    )
                    .pipe(
                        map((eventModel) => {
                            return competitionActions.updateEventByCompetitionIdSuccess({
                                event: this.eventUtilService.convertModelToEntity(eventModel) as Event,
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private competitionDataService: CompetitionDataService,
        private competitionUtilService: CompetitionUtilService,
        private competitionStateService: CompetitionStateService,
        private entityQuantityStateService: EntityQuantityStateService,
        private entityQuantityUtilService: EntityQuantityUtilService,
        private eventStateService: EventStateService,
        private eventUtilService: EventUtilService
    ) {}
}
