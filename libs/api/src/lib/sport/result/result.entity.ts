import { Result } from './result';
import { ResultPeriod } from './result-period';

export interface ResultEntity extends Result {
    matchId: string;
    periods: ResultPeriod[];
}
