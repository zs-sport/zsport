import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { DateUtilService } from '@zsport/api';

@Injectable()
export class DateUtilServiceImpl extends DateUtilService {
    public constructor() {
        super();
    }

    public createActionTime(minute: number, second: number): number {
        return moment
            .duration({
                m: minute,
                s: second,
            })
            .asMilliseconds();
    }

    public createFullTime(startTime: number, minute: number, second: number): number {
        return moment(startTime).add(minute, 'm').add(second, 's').valueOf();
    }

    public getNextDay(baseDate: Date): Date {
        const date = new Date(baseDate.getTime());

        date.setDate(baseDate.getDate() + 1);

        return date;
    }

    public getNow(): number {
        const date = new Date();

        return date.getTime();
    }

    public getPreviousDay(baseDate: Date): Date {
        const date = new Date(baseDate.getTime());

        date.setDate(baseDate.getDate() - 1);

        return date;
    }

    public getToday(): Date {
        const date = new Date();

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        return date;
    }

    public getTomorrow(): Date {
        const date = this.getToday();

        date.setDate(date.getDate() + 1);

        return date;
    }
}
