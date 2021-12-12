import { Period } from './period';

export abstract class PeriodUtilService {
    public abstract createPeriod(
        index: number,
        measurement: string,
        participant1: number,
        participant2: number
    ): Period;
}
