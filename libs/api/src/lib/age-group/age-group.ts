import { Identifiable } from '../base';
import { I18nText } from '../i18n';

export interface AgeGroup extends Identifiable {
    afterDate: number;
    baseYear: string;
    nameI18n: I18nText;
}
