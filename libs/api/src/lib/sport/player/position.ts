import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';

export interface Position extends Identifiable {
    nameI18n: I18nText;
    shortForm: string;
}
