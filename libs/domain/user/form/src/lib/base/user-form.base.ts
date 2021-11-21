import { Observable } from 'rxjs';

import { EntityBaseComponent, UserEntity } from '@zsport/api';

export abstract class UserFormBase extends EntityBaseComponent {
    public user$!: Observable<UserEntity>;

    public constructor() {
        super();
    }
}
