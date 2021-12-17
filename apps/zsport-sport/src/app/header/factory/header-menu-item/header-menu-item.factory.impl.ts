import { Injectable } from '@angular/core';
import { HeaderMenuItemFactory, HeaderMenuItemModel } from '@zsport/shared';

@Injectable()
export class HeaderMenuItemFactoryImpl extends HeaderMenuItemFactory {
    public constructor() {
        super();
    }

    public createMenuItems(): HeaderMenuItemModel[] {
        return [
            {
                disabled: false,
                class: '',
                route: '/home',
                selected: false,
                titleKey: 'page.home',
            },
        ];
    }
}
