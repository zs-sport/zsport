import { Event } from '../event';

export abstract class CompetitionQuantityService {
    public abstract updateGroup(competitionId: string, groups: any): any;
}
