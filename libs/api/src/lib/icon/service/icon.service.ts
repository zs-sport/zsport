import { BaseService } from '../../base';

export abstract class IconService extends BaseService {
    public abstract getIconClass(gender: string): string;
    public abstract getIconName(category: string): string;
}
