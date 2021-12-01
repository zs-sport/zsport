import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    DateUtilService,
    EventEntity,
    EventList,
    EventModel,
    EventUtilService,
    Gender,
} from '@zsport/api';

@Injectable()
export class EventUtilServiceImpl extends EventUtilService {
    public constructor(private dateUtilService: DateUtilService) {
        super();
    }
    public convertEntityToModel(event: EventEntity): EventModel {
        return { ...event, eventDayTime: this.dateUtilService.convertToDate(event.eventDayTime) };
    }

    public convertModelToEntity(eventModel: EventModel): EventEntity {
        return { ...eventModel };
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
}
