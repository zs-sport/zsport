import { ActionEnum } from '../../action';
import { RoundResourceEnum } from './round-resource.enum';

export class RoundPermissionsService {
    static readonly createRoundEntity = ActionEnum.CREATE.toString() + RoundResourceEnum.ROUND_ENTITY.toString();
    static readonly deleteRoundEntity = ActionEnum.DELETE.toString() + RoundResourceEnum.ROUND_ENTITY.toString();
    static readonly updateRoundEntity = ActionEnum.UPDATE.toString() + RoundResourceEnum.ROUND_ENTITY.toString();
    static readonly viewRoundEntity = ActionEnum.VIEW.toString() + RoundResourceEnum.ROUND_ENTITY.toString();
}
