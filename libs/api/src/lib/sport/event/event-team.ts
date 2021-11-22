import { Team } from '../team';
import { EventPlayer } from './event-player';

export interface EventTeam extends Team {
    eventId?: string;
    players: EventPlayer[];
}
