import { Injectable } from '@angular/core';
import { UserEntity, UserHookService } from '@zsport/api';

@Injectable()
export class DefaultUserHookService extends UserHookService {
    public constructor() {
        super();
    }

    public loadEntity(user: UserEntity): void {}
}
