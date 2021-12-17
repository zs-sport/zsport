import { Observable } from 'rxjs';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent, EntityQuantity } from '@zsport/api';

import { HeaderMenuItemModel, HeaderMenuModeEnum, HeaderMenuThemeEnum } from '../../header-menu';
import { UserProfileItemModel } from '../../user-profile';

@Component({
    template: '',
})
export abstract class ApplicationHeaderComponent extends BaseComponent implements OnInit {
    @Input()
    public avatarUrl!: string;
    @Input()
    public displayName!: string;
    @Input()
    public headerMenuComponent: any;
    @Input()
    public isAuthenticatedUser$!: Observable<boolean>;
    @Output()
    public logIn: EventEmitter<boolean>;
    @Output()
    public logOut: EventEmitter<boolean>;
    @Input()
    public logo!: string;
    @Input()
    public menuItems$!: Observable<HeaderMenuItemModel[]>;
    @Input()
    public menuMode!: HeaderMenuModeEnum;
    @Input()
    public menuTheme!: HeaderMenuThemeEnum;
    @Input()
    public userProfileItems$!: Observable<UserProfileItemModel[]>;

    public constructor() {
        super();

        this.logIn = new EventEmitter();
        this.logOut = new EventEmitter();
    }

    public loginClickHandler(): void {
        this.logIn.next(true);
    }

    public ngOnInit(): void {
        this.init();
    }

    protected logoutClickHandler(): void {
        this.logOut.next(true);
    }

    protected abstract init(): void;
}
