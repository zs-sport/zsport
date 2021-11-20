import { ChangeDetectionStrategy, Component, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicTextControl, DynamicTextElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-text-element',
    styleUrls: ['./ngz-text-element.component.less'],
    templateUrl: './ngz-text-element.component.html',
})
export class NgzTextElementComponent extends DynamicTextElementComponent implements OnChanges, OnInit {
    protected modelChangeHandlerFunction: any;

    public onChange = (value: string) => {};

    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }

    public modelChangeHandler(event: any): void {
        if (this.modelChangeHandlerFunction) {
            this.modelChangeHandlerFunction(event.target.value);
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.control) {
            this.onChange(changes.control.currentValue.value);
        }
    }

    public ngOnInit(): void {
        this.modelChangeHandlerFunction = (this.control as DynamicTextControl).modelChangeHandler;
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }
}
