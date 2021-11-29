import { Category, Result, Team } from '../';
import { AgeGroup } from '../../age-group';
import { Identifiable } from '../../base';
import { Gender } from '../../gender';
import { Location } from '../../location';
import { Dates, States } from '../../state';
import { Report } from '../report';

export interface Event extends Identifiable {
    ageGroup: AgeGroup;
    category: Category;
    competitionId?: string;
    dates: Dates | null;
    gender: Gender;
    location: Location | null;
    eventDayTime: number | Date;
    report: Report | null;
    result: Result | null;
    roundId: number | null;
    states: States | null;
    team1: Team;
    team2: Team;
}
