import { BaseService } from '../base';

export abstract class I18nUtil extends BaseService {
    public abstract updateLanguage(language: string): void;
}
