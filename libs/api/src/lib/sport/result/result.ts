import { Identifiable } from '../../base';
import { Dates, States } from '../../state';
import { Period } from '../period';

export interface Result extends Identifiable {
    creatorId: string | null;
    dates: Dates | null;
    eventId: string;
    periods: Period[];
    states: States | null;
}
