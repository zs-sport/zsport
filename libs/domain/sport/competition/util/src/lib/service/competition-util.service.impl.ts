import { Injectable } from '@angular/core';
import { Championship, Competition, CompetitionModel, CompetitionUtilService, StateUtilService } from '@zsport/api';

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

        return this.convertToChampionshipModel(competition as Championship, updatedCompetitionModel);
    }

    public convertModelToEntity(competitionModel: Competition): Competition {
        return this.convertToChampionship(competitionModel as Championship);
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
}
