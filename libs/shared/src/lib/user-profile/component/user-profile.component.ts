import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

import { UserProfileItemModel } from '../model';

@Component({
    template: '',
})
export abstract class UserProfileComponent extends BaseComponent implements OnInit {
    @Input()
    public displayName!: string;
    @Input()
    public items!: UserProfileItemModel[];
    @Input()
    public url!: string;

    public constructor() {
        super();
    }

    public ngOnInit(): void {
        this.init();
    }

    protected defaultInit(): void {
        this.items = [];
        this.displayName = '';
        this.url = '';
    }

    protected abstract init(): void;
}
