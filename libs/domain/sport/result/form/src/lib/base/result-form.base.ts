import { Observable } from 'rxjs';

import { EntityBaseComponent, Result } from '@zsport/api';

export abstract class ResultFormBase extends EntityBaseComponent {
    public result$!: Observable<Result>;
}
