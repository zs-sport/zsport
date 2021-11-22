import { Player } from '../player';

export interface EventPlayer extends Player {
    isLineups: boolean;
    eventStatus?: string;
}
