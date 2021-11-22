import { Category } from '../category';
import { AgeGroup } from '../../age-group';
import { EntityUtilService } from '../../base';
import { Gender } from '../../gender';
import { EventList } from './event-list';
import { EventEntity } from './event.entity';

export abstract class EventUtilService extends EntityUtilService {
    public abstract createEventForCompetition(
        ageGroup: AgeGroup,
        sportCategory: Category,
        gender: Gender,
        competitionId: string,
        roundId: number
    ): EventEntity;
    public abstract createEventLists(events: EventEntity[]): EventList[];
}
