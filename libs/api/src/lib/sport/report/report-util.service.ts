import { BaseService } from '../../base';
import { Event } from '../event';
import { Report } from './report';
import { ReportItem } from './report-item';
import { ReportItemValues } from './report-item-values';

export abstract class ReportUtilService extends BaseService {
    public abstract createDefaultReport(event: Event): Report;
    public abstract createReportItem(reportItemValues: ReportItemValues): ReportItem[];
}
