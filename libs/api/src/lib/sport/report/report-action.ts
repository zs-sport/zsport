import { Identifiable } from '../../base';
import { I18nText } from '../../i18n';
import { ReportConsequence } from './report-consequence';

export interface ReportAction extends Identifiable {
    consequences: ReportConsequence[];
    nameI18n: I18nText;
}
