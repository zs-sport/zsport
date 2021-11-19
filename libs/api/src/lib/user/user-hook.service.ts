import { UserEntity } from './user.entity';

export abstract class UserHookService {
    public constructor() {}

    public loadEntity(user: UserEntity): void {}
}
