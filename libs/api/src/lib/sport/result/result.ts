import { Identifiable } from '../../base';
import { ResultPeriod } from './result-period';

export interface Result extends Identifiable {
    eventId: string;
    periods: ResultPeriod[];
}
