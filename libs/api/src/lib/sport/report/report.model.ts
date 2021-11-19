import { Model } from '../../base';
import { Stateable } from '../../state';
import { ReportItem } from './report-item';

export interface ReportModel extends Model, Stateable {
    creatorId?: string;
    items: ReportItem[];
    matchId: string;
}
