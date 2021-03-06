import { Injectable } from '@angular/core';
import { HeaderMenuItemFactory, HeaderMenuItemModel } from '@zsport/shared';

@Injectable()
export class ZsportAdminHeaderMenuItemFactoryImpl extends HeaderMenuItemFactory {
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
