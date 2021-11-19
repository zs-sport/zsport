import { Identifiable } from '../../base';
import { ResultPeriod } from './result-period';

export interface Result extends Identifiable {
    matchId: string;
    periods: ResultPeriod[];
}
