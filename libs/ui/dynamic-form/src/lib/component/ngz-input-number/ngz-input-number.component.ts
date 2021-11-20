import { ChangeDetectionStrategy, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicInputNumberControl, DynamicInputNumberElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-input-number',
    templateUrl: './ngz-input-number.component.html',
    styleUrls: ['./ngz-input-number.component.less'],
})
export class NgzInputNumberComponent extends DynamicInputNumberElementComponent implements OnInit {
    protected modelChangeHandlerFunction: any;

    public max!: number;
    public min!: number;
    public step!: number;

    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }

    public modelChangeHandler(event: any): void {
        if (this.modelChangeHandlerFunction) {
            this.modelChangeHandlerFunction(event);
        }
    }

    public ngOnInit(): void {
        this.min = (this.control as DynamicInputNumberControl).min;
        this.max = (this.control as DynamicInputNumberControl).max;
        this.step = (this.control as DynamicInputNumberControl).step;

        this.modelChangeHandlerFunction = (this.control as DynamicInputNumberControl).modelChangeHandler;
    }
}
