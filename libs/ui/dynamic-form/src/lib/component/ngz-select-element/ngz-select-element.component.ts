import { Observable, Subject } from 'rxjs';
import { delay, takeUntil, tap, throttleTime } from 'rxjs/operators';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import {
    DynamicFormSelectModeEnum,
    DynamicSelectControl,
    DynamicSelectElementComponent,
    SelectOptionModel,
} from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-select-element',
    styleUrls: ['./ngz-select-element.component.less'],
    templateUrl: './ngz-select-element.component.html',
})
export class NgzSelectElementComponent extends DynamicSelectElementComponent implements OnInit {
    private onSearch$$: Subject<string>;
    private searchTerm = '';

    protected modelChangeHandlerFunction: any;
    protected searchHandlerFunction: any;

    public compare!: any;
    public mode!: DynamicFormSelectModeEnum;
    public options!: SelectOptionModel[];
    public searchShow: boolean = false;
    public serverSearch: boolean = false;
    public showArrow: boolean = false;

    public constructor(@Optional() @Self() ngControl: NgControl, protected changeDetectorRef: ChangeDetectorRef) {
        super(ngControl);

        this.onSearch$$ = new Subject();
    }

    public modelChangeHandler(event: any): void {
        if (this.modelChangeHandlerFunction) {
            this.modelChangeHandlerFunction(event);
        }
    }

    public ngOnInit(): void {
        this.searchShow = (this.control as DynamicSelectControl<any>).showSearch;
        this.mode = (this.control as DynamicSelectControl<any>).mode;
        this.compare = (this.control as DynamicSelectControl<any>).compare;
        this.showArrow = (this.control as DynamicSelectControl<any>).showArrow;
        this.serverSearch = (this.control as DynamicSelectControl<any>).serverSearch;

        this.modelChangeHandlerFunction = (this.control as DynamicSelectControl<any>).modelChangeHandler;
        this.searchHandlerFunction = (this.control as DynamicSelectControl<any>).searchHandler;

        (this.control as DynamicSelectControl<any>).options$
            .pipe(
                tap((options) => {
                    this.options = options;

                    this.changeDetectorRef.markForCheck();
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public searchHandler(event: any): void {
        this.onSearch$$
            .asObservable()
            .pipe(
                throttleTime(800),
                tap((event) => {
                    if (this.searchHandlerFunction && this.searchTerm !== event) {
                        this.searchHandlerFunction(event);

                        this.searchTerm = event;
                    }
                }),
                takeUntil(this.destroy)
            )
            .subscribe();

        this.onSearch$$.next(event);
    }
}
