import { HeaderMenuItemModel } from '../model';

export abstract class HeaderMenuItemFactory {
    public abstract createMenuItems(): HeaderMenuItemModel[];
}
