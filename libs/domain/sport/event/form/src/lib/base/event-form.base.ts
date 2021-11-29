import { Observable } from 'rxjs';

import { EntityBaseComponent, EventEntity } from '@zsport/api';

export abstract class EventFormBase extends EntityBaseComponent {
    public event$!: Observable<EventEntity>;
}
