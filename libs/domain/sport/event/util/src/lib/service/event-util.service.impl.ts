import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    CategoryQuantityService,
    CompetitionQuantityService,
    DateUtilService,
    EntityQuantity,
    EntityQuantityEnum,
    Event,
    EventEntity,
    EventList,
    EventModel,
    EventUtilService,
    Gender,
} from '@zsport/api';

@Injectable()
export class EventUtilServiceImpl extends EventUtilService {
    public constructor(
        private categoryQuantityService: CategoryQuantityService,
        private competitionQuantityService: CompetitionQuantityService,
        private dateUtilService: DateUtilService
    ) {
        super();
    }

    public convertEntityToModel(event: EventEntity): EventModel {
        return {
            ageGroup: event.ageGroup,
            category: event.category,
            dates: event.dates,
            gender: event.gender,
            location: event.location,
            roundId: event.roundId,
            states: event.states,
            team1: event.team1,
            team2: event.team2,
            uid: event.uid || null,
            competitionId: event.competitionId,
            eventDayTime: this.dateUtilService.convertToDate(event.eventDayTime),
        };
    }

    public convertModelToEntity(eventModel: EventModel): EventEntity {
        return { ...eventModel, results: [] };
    }

    public createEventForCompetition(
        ageGroup: AgeGroup,
        category: Category,
        gender: Gender,
        competitionId: string,
        roundId: number
    ): Partial<EventEntity> {
        return {
            ageGroup,
            category,
            gender,
            competitionId,
            roundId,
        };
    }

    public createEventLists(events: EventEntity[]): EventList[] {
        const eventMap: Map<number | Date, EventList> = new Map();

        events
            .sort((a, b) => (a.eventDayTime < b.eventDayTime ? -1 : 1))
            .forEach((event) => {
                let tempEvents: EventList | undefined = eventMap.get(event.eventDayTime);

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

    public updateEntityQuantity(entityQuantity: EntityQuantity, event: Event): EntityQuantity {
        let groups: any = { ...entityQuantity.groups };
        let categoryGroup = this.categoryQuantityService.updateGroup(event.category.uid || '', groups);
        let competitionGroup = this.competitionQuantityService.updateGroup(event.competitionId || '', groups);

        groups[EntityQuantityEnum.SPORT_CATEGORY] = categoryGroup;
        groups[EntityQuantityEnum.SPORT_COMPETITION] = competitionGroup;

        return {
            ...entityQuantity,
            quantity: entityQuantity.quantity + 1,
            groups,
        };
    }
}
