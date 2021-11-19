import { Source } from '../source';
import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { User } from '../../user';
import { Dates } from '../../state';

export interface Article extends Identifiable {
    author?: User;
    contentI18n: I18nText;
    dates: Dates;
    descriptionI18n: I18nText;
    link?: string;
    originalUid?: string;
    source?: Source;
    titleI18n: I18nText;
    version: number;
}
