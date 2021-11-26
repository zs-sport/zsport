import { Observable } from 'rxjs';

import { BaseComponent, TeamEntity } from '@zsport/api';

export abstract class TeamFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<TeamEntity>;
}
