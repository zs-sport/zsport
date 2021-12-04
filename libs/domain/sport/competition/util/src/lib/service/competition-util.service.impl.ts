import { Injectable } from '@angular/core';
import {
    Championship,
    Competition,
    CompetitionModel,
    CompetitionTypeEnum,
    CompetitionUtilService,
    Group,
    GroupLevel,
    StateUtilService,
    Tournament,
} from '@zsport/api';

export const GROUP_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

@Injectable()
export class CompetitionUtilServiceImpl extends CompetitionUtilService {
    public constructor(private stateUtilService: StateUtilService) {
        super();
    }

    public convertEntityToModel(competition: Competition): Competition {
        let updatedCompetitionModel: Competition;

        if (!competition.uid) {
            competition = this.stateUtilService.addDefaultState(competition) as Competition;
            competition = this.stateUtilService.addDefaultDates(competition) as Competition;
        } else {
            competition = this.stateUtilService.updateDates(competition) as Competition;
        }

        updatedCompetitionModel = {
            fromTo: competition.fromTo,
            name: competition.name,
            owner: competition.owner,
            category: competition.category,
            rule: competition.rule || null,
            type: competition.type,
            dates: competition.dates,
            states: competition.states,
            uid: competition.uid,
        };

        if (competition.type === CompetitionTypeEnum.CHAMPIONSHIP) {
            return this.convertToChampionshipModel(competition as Championship, updatedCompetitionModel);
        } else {
            return this.convertToTournamentModel(competition as Tournament, updatedCompetitionModel);
        }
    }

    public convertModelToEntity(competitionModel: Competition): Competition {
        if (competitionModel.type === CompetitionTypeEnum.CHAMPIONSHIP) {
            return this.convertToChampionship(competitionModel as Championship);
        } else {
            return this.convertToTournament(competitionModel as Tournament);
        }
    }

    private convertToChampionship(championshipModel: Championship): Championship {
        const championship = { ...championshipModel };

        return championship;
    }

    private convertToChampionshipModel(championship: Championship, competitionModel: CompetitionModel): Championship {
        return {
            ...competitionModel,
            ageGroup: championship.ageGroup,
            clubs: championship.clubs,
            gender: championship.gender,
            roundIterations: championship.roundIterations,
            rounds: championship.rounds || null,
        };
    }

    private convertToTournament(tournamentModel: Tournament): Tournament {
        const tournament = { ...tournamentModel };

        return tournament;
    }

    private convertToTournamentModel(tournament: Tournament, competitionModel: CompetitionModel): Tournament {
        const tournamentModel: Tournament = {
            ...competitionModel,
            ageGroup: tournament.ageGroup,
            clubs: tournament.clubs,
            gender: tournament.gender,
            groupLevels: tournament.groupLevels,
            isNational: tournament.isNational,
        };

        if (!tournamentModel.uid) {
            tournamentModel.groupLevels = !!tournamentModel.groupLevels
                ? tournamentModel.groupLevels.map((groupLevel) =>
                      this.updateGroupLevel(groupLevel, tournamentModel.clubs.length)
                  )
                : [];
        }

        return tournamentModel;
    }

    private updateGroupLevel(groupLevel: GroupLevel, teamsNumber: number): GroupLevel {
        const groups: Group[] = [];

        if (teamsNumber > groupLevel.groupsNumber * 3) {
            throw new Error('Groups number of group level is mismatched with teams number!');
        }

        if (groupLevel.groupsNumber > 0) {
            [...Array(groupLevel.groupsNumber)].map((_, index) => {
                groups.push({
                    eventIds: [],
                    title: 'Group ' + GROUP_NAMES[index],
                });
            });
        }

        return {
            ...groupLevel,
            groups,
            eventIds: groupLevel.eventIds || [],
        };
    }
}
