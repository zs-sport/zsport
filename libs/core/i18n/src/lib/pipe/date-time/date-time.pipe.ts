import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTime',
})
export class DateTimePipe implements PipeTransform {
    public transform(milliseconds: number | Date, format: string): string {
        return moment(milliseconds).format(format);
    }
}
