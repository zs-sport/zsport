import { Identifiable } from '../base';
import { Country } from '../country';
import { I18nText } from '../i18n';
import { Dates, States } from '../state';
import { LocationTypeEnum } from './location-type.enum';

export interface Location extends Identifiable {
    address: string;
    country: Country | null;
    dates: Dates;
    descriptionI18n?: I18nText;
    name: string;
    photo: string | null;
    seats: number;
    states: States;
    type: LocationTypeEnum;
}
