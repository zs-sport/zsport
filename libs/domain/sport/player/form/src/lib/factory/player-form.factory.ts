import { Observable } from 'rxjs';

import { BaseComponent, PlayerEntity } from '@zsport/api';

export abstract class PlayerFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<PlayerEntity>;
}
