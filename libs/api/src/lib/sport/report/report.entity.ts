import { Report } from './report';
import { ReportItem } from './report-item';

export interface ReportEntity extends Report {
    creatorId?: string;
    items: ReportItem[];
    matchId: string;
}
