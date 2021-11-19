import { ActionEnum } from '../../action';
import { TeamResourceEnum } from './team-resource.enum';

export class TeamPermissionsService {
    static readonly createTeamEntity = ActionEnum.CREATE.toString() + TeamResourceEnum.TEAM_ENTITY.toString();
    static readonly deleteTeamEntity = ActionEnum.DELETE.toString() + TeamResourceEnum.TEAM_ENTITY.toString();
    static readonly updateTeamEntity = ActionEnum.UPDATE.toString() + TeamResourceEnum.TEAM_ENTITY.toString();
    static readonly viewTeamEntity = ActionEnum.VIEW.toString() + TeamResourceEnum.TEAM_ENTITY.toString();
}
