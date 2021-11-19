import { ActionEnum } from '../../../action';
import { PlayerResourceEnum } from '../enum';

export class PlayerPermissionsService {
    static readonly createPlayerEntity = ActionEnum.CREATE.toString() + PlayerResourceEnum.PLAYER_ENTITY.toString();
    static readonly deletePlayerEntity = ActionEnum.DELETE.toString() + PlayerResourceEnum.PLAYER_ENTITY.toString();
    static readonly updatePlayerEntity = ActionEnum.UPDATE.toString() + PlayerResourceEnum.PLAYER_ENTITY.toString();
    static readonly viewPlayerEntity = ActionEnum.VIEW.toString() + PlayerResourceEnum.PLAYER_ENTITY.toString();
}
