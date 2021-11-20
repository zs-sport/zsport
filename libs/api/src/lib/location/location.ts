import { Identifiable } from '../base';
import { I18nText } from '../i18n';
import { Dates, States } from '../state';
import { LocationTypeEnum } from './location-type.enum';

export interface Location extends Identifiable {
    address: string;
    currentLanguage: string;
    dates: Dates;
    descriptionI18n?: I18nText;
    name: string;
    photo?: string;
    seats?: number;
    states?: States;
    type?: LocationTypeEnum;
}