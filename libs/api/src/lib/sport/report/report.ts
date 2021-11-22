import { Identifiable } from '../../base';
import { ReportItem } from './report-item';

export interface Report extends Identifiable {
    creatorId?: string;
    items: ReportItem[];
    eventId: string;
}
