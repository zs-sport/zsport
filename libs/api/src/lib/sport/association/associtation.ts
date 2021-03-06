import { Category } from '../';
import { Address } from '../../address';
import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { Dates, States } from '../../state';

export interface Association extends Identifiable {
    address?: Address;
    category: Category;
    contacts?: string[];
    dates: Dates | null;
    nameI18n: I18nText;
    shortName: string | null;
    parent: Association | null;
    phone?: string;
    states: States | null;
}
