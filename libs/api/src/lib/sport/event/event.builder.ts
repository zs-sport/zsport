import { AgeGroup } from '../../age-group';
import { EntityBuilder } from '../../base';
import { Gender } from '../../gender';
import { Location } from '../../location';
import { Dates, States } from '../../state';
import { Category } from '../category';
import { Report } from '../report';
import { Result } from '../result';
import { Team } from '../team';

export abstract class EventBuilder extends EntityBuilder {
    protected event!: Event;

    public abstract createDates(dates: Dates): EventBuilder;
    public abstract getEvent(): Event;
    public abstract reset(isModel: boolean): EventBuilder;
    public abstract setAgeGroup(ageGroup: AgeGroup): EventBuilder;
    public abstract setCategory(categoryModel: Category): EventBuilder;
    public abstract setCompetitionId(competitionId: string): EventBuilder;
    public abstract setDates(dates: Dates): EventBuilder;
    public abstract setEventDayTime(eventDayTime: number | Date): EventBuilder;
    public abstract setGender(gender: Gender): EventBuilder;
    public abstract setLocation(location: Location): EventBuilder;
    public abstract setReport(report: Report): EventBuilder;
    public abstract setResult(result: Result): EventBuilder;
    public abstract setRoundId(roundId: number): EventBuilder;
    public abstract setState(states: States): EventBuilder;
    public abstract setTeam1(team1: Team): EventBuilder;
    public abstract setTeam2(team2: Team): EventBuilder;
    public abstract setUid(uid: string): EventBuilder;
}
