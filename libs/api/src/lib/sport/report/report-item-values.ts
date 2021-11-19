import { Identifiable } from '../../base';
import { DynamicEventPlayer, EventTeam } from '../event';
import { ReportAction } from './report-action';
import { ReportConsequence } from './report-consequence';

export interface ReportItemValues extends Identifiable {
    action?: ReportAction;
    consequence?: ReportConsequence;
    minute?: number;
    otherTeam?: EventTeam;
    period?: number;
    player?: DynamicEventPlayer;
    second?: number;
    startTime?: number;
    team?: EventTeam;
}
