import { Group } from './group';
import { Event } from '../event';

export interface GroupLevel {
    groups: Group[] | null;
    level: number;
    title: string;
    events: Event[] | null;
}
