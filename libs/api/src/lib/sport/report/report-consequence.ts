import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { DynamicEventPlayer } from '../event';

export interface ReportConsequence extends Identifiable {
    by?: DynamicEventPlayer;
    byList?: DynamicEventPlayer[];
    nameI18n?: I18nText;
    type?: string;
}
