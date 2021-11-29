import { Category } from '../';
import { AgeGroup } from '../../age-group';
import { EntityUtilService } from '../../base';
import { Gender } from '../../gender';
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
}
