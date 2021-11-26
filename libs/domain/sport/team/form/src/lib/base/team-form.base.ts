import { Observable } from 'rxjs';

import { EntityBaseComponent, TeamEntity } from '@zsport/api';

export abstract class TeamFormBase extends EntityBaseComponent {
    public team$!: Observable<TeamEntity>;
}
