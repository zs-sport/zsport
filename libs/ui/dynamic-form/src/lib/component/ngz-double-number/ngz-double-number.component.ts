import { ChangeDetectionStrategy, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoubleNumber, DynamicDoubleNumberControl, DynamicDoubleNumberElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-double-number',
    templateUrl: './ngz-double-number.component.html',
    styleUrls: ['./ngz-double-number.component.less'],
})
export class NgzDoubleNumberComponent extends DynamicDoubleNumberElementComponent implements OnInit {
    protected modelChangeHandlerFunction: any;

    public first: number = 0;
    public max: number = 0;
    public min: number = 0;
    public second: number = 0;
    public step: number = 0;

    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }

    public modelChangeHandler(event: any): void {
        if (this.modelChangeHandlerFunction) {
            this.modelChangeHandlerFunction(event);
        }
    }

    public ngOnInit(): void {
        this.first = this.control && this.control.value ? (this.control.value as DoubleNumber).first : 0;
        this.second = this.control && this.control.value ? (this.control.value as DoubleNumber).second : 0;
        this.min = this.control ? (this.control as DynamicDoubleNumberControl).min : 0;
        this.max = this.control ? (this.control as DynamicDoubleNumberControl).max : 0;
        this.step = this.control ? (this.control as DynamicDoubleNumberControl).step : 0;

        this.modelChangeHandlerFunction = (this.control as DynamicDoubleNumberControl).modelChangeHandler;
    }
}
