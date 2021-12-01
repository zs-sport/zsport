import { Injectable } from '@angular/core';
import { EventPermissionsService, PermissionsService } from '@zsport/api';

@Injectable()
export class AdminCompetitionEventPermissionsService extends EventPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            EventPermissionsService.createEventEntity,
            EventPermissionsService.deleteEventEntity,
            EventPermissionsService.updateEventEntity,
            EventPermissionsService.viewEventEntity,
        ]);
    }
}
