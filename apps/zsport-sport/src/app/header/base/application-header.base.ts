import { Observable, Subject } from 'rxjs';

import { BaseComponent } from '@zsport/api';

export abstract class ApplicationHeaderBase extends BaseComponent {
    public dynamicComponent$!: Observable<any>;
    public dynamicInputs$$!: Subject<any>;
    public dynamicOutputs$!: Observable<any>;
}
