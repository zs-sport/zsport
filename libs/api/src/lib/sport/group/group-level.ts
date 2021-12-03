import { Group } from './group';
import { Event } from '../event';

export interface GroupLevel {
    events: Event[] | null;
    groups: Group[] | null;
    groupsNumber: number;
    isWithResults: boolean;
    level: number;
    title: string;
    winnersNumber: number;
}
