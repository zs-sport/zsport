import { Injectable } from '@angular/core';
import { EventPermissionsService, PermissionsService } from '@zsport/api';
import { EventAdminPermissionsService } from '@zsport/domain/sport/event/admin';

@Injectable()
export class AdminEventPermissionsService extends EventAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            EventAdminPermissionsService.viewEventAdminPage,
            EventAdminPermissionsService.viewEventEditPage,
            EventAdminPermissionsService.viewEventEntity,
            EventAdminPermissionsService.viewEventListPage,
            EventPermissionsService.createEventEntity,
            EventPermissionsService.deleteEventEntity,
            EventPermissionsService.updateEventEntity,
            EventPermissionsService.viewEventEntity,
        ]);
    }
}
