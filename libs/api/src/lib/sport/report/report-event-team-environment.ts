import { Identifiable } from '../../base';
import { DynamicEventPlayer } from '../event';

export interface ReportEventTeamEnvironment extends Identifiable {
    curentTwoMinutesMap: Map<number, DynamicEventPlayer>;
    ejectionsMap: Map<number, number>;
    lineupPlayersMap: Map<number, DynamicEventPlayer>;
    substitutePlayersMap: Map<number, DynamicEventPlayer>;
}
