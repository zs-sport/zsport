import { Observable, Subject } from 'rxjs';

import { BaseComponent, Competition } from '@zsport/api';

export abstract class HomePageContentBase extends BaseComponent {
    public competitions$!: Observable<Competition[]>;
}
