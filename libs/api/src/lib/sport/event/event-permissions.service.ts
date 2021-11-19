import { ActionEnum } from '../../action';
import { EventResourceEnum } from './event-resource.enum';

export class EventPermissionsService {
    static readonly createEventEntity = ActionEnum.CREATE.toString() + EventResourceEnum.EVENT_ENTITY.toString();
    static readonly deleteEventEntity = ActionEnum.DELETE.toString() + EventResourceEnum.EVENT_ENTITY.toString();
    static readonly updateEventEntity = ActionEnum.UPDATE.toString() + EventResourceEnum.EVENT_ENTITY.toString();
    static readonly viewEventEntity = ActionEnum.VIEW.toString() + EventResourceEnum.EVENT_ENTITY.toString();
}
