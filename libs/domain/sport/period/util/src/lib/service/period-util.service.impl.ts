import { Injectable } from '@angular/core';
import { Period, PeriodUtilService } from '@zsport/api';

@Injectable()
export class PeriodUtilServiceImpl extends PeriodUtilService {
    public createPeriod(index: number, measurement: string, participant1: number, participant2: number): Period {
        return { index, measurement, participant1, participant2 };
    }
}
