import { Observable } from 'rxjs';

import { ClubEntity, EntityBaseComponent } from '@zsport/api';

export abstract class ClubFormBase extends EntityBaseComponent {
    public sportClub$!: Observable<ClubEntity>;
}
