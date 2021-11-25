import { Observable } from 'rxjs';

import { BaseComponent, ClubEntity } from '@zsport/api';

export abstract class ClubFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<ClubEntity>;
}
