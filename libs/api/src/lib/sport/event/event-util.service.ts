import { AgeGroup } from '../../age-group';
import { EntityUtilService } from '../../base';
import { EntityQuantity } from '../../entity-quantity';
import { Gender } from '../../gender';
import { Category } from '../category';
import { Event } from './event';
import { EventList } from './event-list';
import { EventEntity } from './event.entity';

export abstract class EventUtilService extends EntityUtilService {
    public abstract createEventForCompetition(
        ageGroup: AgeGroup,
        category: Category,
        gender: Gender,
        competitionId: string,
        roundId: number
    ): Partial<EventEntity>;
    public abstract createEventLists(events: EventEntity[]): EventList[];
    public abstract updateEntityQuantity(entityQuantity: EntityQuantity, event: Event): EntityQuantity;
}
