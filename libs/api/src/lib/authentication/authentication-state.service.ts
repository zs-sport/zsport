import { Observable } from 'rxjs';

import { BaseService } from '../base';
import { UserEntity } from '../user';

export abstract class AuthenticationStateService extends BaseService {
    public abstract dispatchAuthenticated(user: UserEntity): void;
    public abstract dispatchGetUser(): void;
    public abstract dispatchGoogleLogin(): void;
    public abstract dispatchLogout(): void;
    public abstract selectAuthenticatedUser$(): Observable<UserEntity | null>;
    public abstract selectIsAuthenticated$(): Observable<boolean>;
}
