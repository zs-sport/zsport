import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { Dates, States } from '../../state';
import { CategoryRule } from './category-rule';

export interface Category extends Identifiable {
    color: string;
    dates?: Dates;
    nameI18n: I18nText;
    rule: CategoryRule;
    states?: States;
}
