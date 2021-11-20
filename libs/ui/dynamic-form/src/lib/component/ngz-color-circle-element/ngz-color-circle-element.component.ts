import { ChangeDetectionStrategy, Component, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicColorCircleElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-color-circle-element',
    templateUrl: './ngz-color-circle-element.component.html',
    styleUrls: ['./ngz-color-circle-element.component.less'],
})
export class NgzColorCircleElementComponent extends DynamicColorCircleElementComponent implements OnChanges {
    public onChange = (value: string) => {};

    public value!: string;

    constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }

    public changeCompleteHandler(event: any): void {
        this.value = event.color.hex;

        this.onChange(this.value);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.control) {
            this.onChange(changes.control.currentValue.value);
        }
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }
}
