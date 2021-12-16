import { Injectable } from '@angular/core';
import { UserEntity, UserHookService } from '@zsport/api';

@Injectable()
export class DefaultUserHookService extends UserHookService {
    public loadEntity(user: UserEntity): void {}
}
