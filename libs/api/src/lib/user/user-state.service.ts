import { User } from '.';
import { EntityStateService } from '../base';

export abstract class UserStateService extends EntityStateService {
    public constructor() {
        super();
    }

    public abstract dispatchLoadExistedUserAction(user: User): void;
}
