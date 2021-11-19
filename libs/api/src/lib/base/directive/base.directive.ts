import { Subject } from 'rxjs';

import { Directive, OnDestroy } from '@angular/core';

@Directive({
    selector: 'base',
})
export abstract class BaseDirective implements OnDestroy {
    protected destroy: Subject<boolean>;

    public constructor() {
        this.destroy = new Subject();
    }

    public ngOnDestroy(): void {
        this.destroy.next(true);
        this.destroy.complete();
    }
}
