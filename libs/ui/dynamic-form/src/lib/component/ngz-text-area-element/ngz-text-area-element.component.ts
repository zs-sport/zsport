import { ChangeDetectionStrategy, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicTextAreaControl, DynamicTextAreaElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-text-area-element',
    styleUrls: ['./ngz-text-area-element.component.less'],
    templateUrl: './ngz-text-area-element.component.html',
})
export class NgzTextAreaElementComponent extends DynamicTextAreaElementComponent implements OnInit {
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

    public ngOnInit(): void {
        this.modelChangeHandlerFunction = (this.control as DynamicTextAreaControl).modelChangeHandler;
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }
}
