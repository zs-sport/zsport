import { Observable } from 'rxjs';

import { EntityBaseComponent, PlayerEntity } from '@zsport/api';

export abstract class PlayerFormBase extends EntityBaseComponent {
    public player$!: Observable<PlayerEntity>;
}
