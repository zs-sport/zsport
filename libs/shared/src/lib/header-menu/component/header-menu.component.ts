import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

import { HeaderMenuModeEnum, HeaderMenuThemeEnum } from '../enum';
import { HeaderMenuItemModel } from '../model';

@Component({
    template: '',
})
export abstract class HeaderMenuComponent extends BaseComponent implements OnInit {
    @Input()
    public items!: HeaderMenuItemModel[];
    @Input()
    public mode!: HeaderMenuModeEnum;
    @Input()
    public theme!: HeaderMenuThemeEnum;

    public ngOnInit(): void {
        this.init();
    }

    protected defaultInit(): void {
        this.mode = HeaderMenuModeEnum.horizontal;
        this.theme = HeaderMenuThemeEnum.light;
        this.items = [];
    }

    protected abstract init(): void;
}
