import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'actionTime',
})
export class ActionTimePipe implements PipeTransform {
    public transform(value: number): string {
        return moment.utc(moment.duration(value).asMilliseconds()).format('mm:ss');
    }
}
