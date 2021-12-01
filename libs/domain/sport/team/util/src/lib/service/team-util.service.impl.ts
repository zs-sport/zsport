import { Injectable } from '@angular/core';
import {
    AgeGroup,
    CategoryModel,
    EventTeam,
    Gender,
    I18nService,
    StateUtilService,
    TeamEntity,
    TeamModel,
    TeamUtilService,
} from '@zsport/api';

@Injectable()
export class TeamUtilServiceImpl extends TeamUtilService {
    public constructor(private i18nService: I18nService, private stateUtilService: StateUtilService) {
        super();

        this.currentLanguage = this.i18nService.getActiveLangAsString();
    }

    public convertEntityToModel(team: TeamEntity): TeamModel {
        if (!team.uid) {
            team = this.stateUtilService.addDefaultState(team) as TeamEntity;
            team = this.stateUtilService.addDefaultDates(team) as TeamEntity;
        } else {
            team = this.stateUtilService.updateDates(team) as TeamEntity;
        }

        const updatedTeamModel: TeamModel = {
            ageGroup: team.ageGroup,
            ageGroupGenderCategory: this.generateAgeGroupGenderCategory(team.ageGroup, team.gender, team.category),
            category: team.category,
            club: team.club,
            dates: team.dates,
            gender: team.gender,
            name: team.club.name,
            states: team.states ? team.states : null,
            uid: team.uid,
        };

        return updatedTeamModel;
    }

    public convertEventTeamEntityToEventTeamModel(eventTeam: EventTeam): EventTeam {
        if (!eventTeam.uid) {
            eventTeam = this.stateUtilService.addDefaultState(eventTeam) as EventTeam;
            eventTeam = this.stateUtilService.addDefaultDates(eventTeam) as EventTeam;
        } else {
            eventTeam = this.stateUtilService.updateDates(eventTeam) as EventTeam;
        }

        const updatedEventTeamModel: EventTeam = {
            ageGroup: eventTeam.ageGroup,
            ageGroupGenderCategory: this.generateAgeGroupGenderCategory(
                eventTeam.ageGroup,
                eventTeam.gender,
                eventTeam.category
            ),
            category: eventTeam.category,
            club: eventTeam.club,
            dates: eventTeam.dates,
            gender: eventTeam.gender,
            eventId: eventTeam.eventId,
            players: eventTeam.players,
            name: eventTeam.club.name,
            states: eventTeam.states ? eventTeam.states : null,
            uid: eventTeam.uid,
        };

        return updatedEventTeamModel;
    }

    public convertEventTeamModelToEventTeamEntity(eventTeamModel: EventTeam): EventTeam {
        const eventTeam = { ...eventTeamModel };

        return eventTeam;
    }

    public convertModelToEntity(teamModel: TeamModel): TeamEntity {
        const team = { ...teamModel };

        return team;
    }

    protected generateAgeGroupGenderCategory(ageGroup: AgeGroup, gender: Gender, category: CategoryModel): string {
        return `${ageGroup.uid}_${gender.uid}_${category.uid}`;
    }
}
