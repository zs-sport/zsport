import { ChangeDetectionStrategy, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicDatePickerControl, DynamicDatePickerElementComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-date-picker-element',
    templateUrl: './ngz-date-picker-element.component.html',
    styleUrls: ['./ngz-date-picker-element.component.less'],
})
export class NgzDatePickerElementComponent extends DynamicDatePickerElementComponent implements OnInit {
    public isShowTime!: boolean;

    public constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);
    }

    public ngOnInit(): void {
        this.isShowTime = (this.control as DynamicDatePickerControl).isShowTime;
    }
}
