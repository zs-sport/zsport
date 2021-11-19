import { Category } from '../';
import { Address } from '../../address';
import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { Dates, States } from '../../state';

export interface Association extends Identifiable {
    address?: Address;
    category: Category;
    contacts?: string[];
    dates?: Dates;
    nameI18n: I18nText;
    parent: Association | null;
    phone?: string;
    states?: States;
}
