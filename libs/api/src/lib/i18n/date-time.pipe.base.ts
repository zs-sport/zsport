import { PipeTransform } from '@angular/core';

export abstract class DateTimePipeBase implements PipeTransform {
    public abstract transform(value: any, ...args: unknown[]): string;
}
