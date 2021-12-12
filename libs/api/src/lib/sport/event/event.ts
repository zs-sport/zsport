import { AgeGroup } from '../../age-group';
import { Identifiable } from '../../base';
import { Gender } from '../../gender';
import { Location } from '../../location';
import { Dates, States } from '../../state';
import { Category } from '../category';
import { Team } from '../team';

export interface Event extends Identifiable {
    ageGroup: AgeGroup;
    category: Category;
    competitionId?: string;
    dates: Dates | null;
    eventDayTime: number | Date;
    gender: Gender;
    location: Location | null;
    roundId: number | null;
    states: States | null;
    team1: Team;
    team2: Team;
}
