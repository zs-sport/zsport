import { ActionEnum } from '../../action';
import { SourceResourceEnum } from './source-resource.enum';

export class SourcePermissionsService {
    static readonly createSourceEntity = ActionEnum.CREATE.toString() + SourceResourceEnum.SOURCE_ENTITY.toString();
    static readonly deleteSourceEntity = ActionEnum.DELETE.toString() + SourceResourceEnum.SOURCE_ENTITY.toString();
    static readonly updateSourceEntity = ActionEnum.UPDATE.toString() + SourceResourceEnum.SOURCE_ENTITY.toString();
    static readonly viewSourceEntity = ActionEnum.VIEW.toString() + SourceResourceEnum.SOURCE_ENTITY.toString();
}
