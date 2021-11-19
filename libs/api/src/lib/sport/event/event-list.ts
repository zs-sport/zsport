import { Event } from './event';

export interface EventList {
    eventDayTime: number | Date;
    events: Event[];
}
