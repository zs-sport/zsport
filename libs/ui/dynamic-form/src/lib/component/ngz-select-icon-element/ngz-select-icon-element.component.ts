import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicSelectIconControl, SelectIcon } from '@zsport/api';

import { NgzSelectElementComponent } from '../ngz-select-element';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-select-icon-element',
    styleUrls: ['./ngz-select-icon-element.component.less'],
    templateUrl: './ngz-select-icon-element.component.html',
})
export class NgzSelectIconElementComponent extends NgzSelectElementComponent implements OnInit {
    public icons: SelectIcon[] = [];

    public constructor(@Optional() @Self() ngControl: NgControl, changeDetectorRef: ChangeDetectorRef) {
        super(ngControl, changeDetectorRef);
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.icons = (this.control as DynamicSelectIconControl<any>).icons;
    }
}
