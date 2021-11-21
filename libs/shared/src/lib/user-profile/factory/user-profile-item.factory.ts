import { UserEntity } from '@zsport/api';

import { UserProfileItemModel } from '../model';

export abstract class UserProfileItemFactory {
    public abstract createProfileItems(user: UserEntity): UserProfileItemModel[];
}
