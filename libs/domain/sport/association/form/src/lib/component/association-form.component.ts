import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AssociationFormBase } from '../base';
import { AssociationFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AssociationFormService],
    selector: 'zs-association-form',
    templateUrl: './association-form.component.html',
    styleUrls: ['./association-form.component.less'],
})
export class AssociationFormComponent extends AssociationFormBase implements OnInit {
    public constructor(private componentService: AssociationFormService) {
        super();

        this.dynamicInputs$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.componentService
            .init$(this.dynamicInputs$$)
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
