import { User } from './user';
import { EntityStateService } from '../base';

export abstract class UserStateService extends EntityStateService {
    public abstract dispatchLoadExistedUserAction(user: User): void;
}
