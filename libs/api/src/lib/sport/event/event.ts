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
    dates?: Dates;
    gender: Gender;
    location?: Location;
    matchDayTime: number | Date;
    report?: Report;
    result?: Result;
    roundId?: number;
    states?: States;
    team1: Team;
    team2: Team;
}