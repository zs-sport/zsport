import { Subject } from 'rxjs';

import { BaseService } from '@zsport/api';

export abstract class ZsportAdminApplicationHeaderBase extends BaseService {
    public params$$!: Subject<any>;
}
