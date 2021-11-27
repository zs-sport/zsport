import { Observable } from 'rxjs';

import { EntityBaseComponent, PersonEntity } from '@zsport/api';

export abstract class PersonFormBase extends EntityBaseComponent {
    public person$!: Observable<PersonEntity>;
}
