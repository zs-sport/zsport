import { ActionEnum } from '../../action';
import { CompetitionResourceEnum } from './competition-resource.enum';

export class CompetitionPermissionsService {
    static readonly createCompetitionEntity =
        ActionEnum.CREATE.toString() + CompetitionResourceEnum.COMPETITION_ENTITY.toString();
    static readonly deleteCompetitionEntity =
        ActionEnum.DELETE.toString() + CompetitionResourceEnum.COMPETITION_ENTITY.toString();
    static readonly updateCompetitionEntity =
        ActionEnum.UPDATE.toString() + CompetitionResourceEnum.COMPETITION_ENTITY.toString();
    static readonly viewCompetitionEntity =
        ActionEnum.VIEW.toString() + CompetitionResourceEnum.COMPETITION_ENTITY.toString();
}
