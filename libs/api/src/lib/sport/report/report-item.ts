import { Identifiable } from '../../base';
import { DynamicEventPlayer, EventTeam } from '../event';
import { ReportAction } from './report-action';
import { ReportConsequence } from './report-consequence';

export interface ReportItem extends Identifiable {
    action?: ReportAction;
    actionTime: number;
    consequence?: ReportConsequence;
    fullTime: number;
    isLinked: boolean;
    message?: string;
    period: number;
    player: DynamicEventPlayer;
    team: EventTeam;
}
