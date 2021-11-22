import { Observable } from 'rxjs';

import { EntityBaseComponent, RoleEntity } from '@zsport/api';

export abstract class RoleFormBase extends EntityBaseComponent {
    public role$!: Observable<RoleEntity>;
}
