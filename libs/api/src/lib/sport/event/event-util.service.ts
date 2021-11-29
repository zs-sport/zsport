import { EntityUtilService } from '../../base';
import { EventList } from './event-list';
import { EventEntity } from './event.entity';

export abstract class EventUtilService extends EntityUtilService {
    public abstract createEventLists(events: EventEntity[]): EventList[];
}
