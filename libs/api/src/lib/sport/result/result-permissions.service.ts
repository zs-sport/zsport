import { ActionEnum } from '../../action';
import { ResultResourceEnum } from './result-resource.enum';

export class ResultPermissionsService {
    static readonly createResultEntity = ActionEnum.CREATE.toString() + ResultResourceEnum.RESULT_ENTITY.toString();
    static readonly deleteResultEntity = ActionEnum.DELETE.toString() + ResultResourceEnum.RESULT_ENTITY.toString();
    static readonly updateResultEntity = ActionEnum.UPDATE.toString() + ResultResourceEnum.RESULT_ENTITY.toString();
    static readonly viewResultEntity = ActionEnum.VIEW.toString() + ResultResourceEnum.RESULT_ENTITY.toString();
}
