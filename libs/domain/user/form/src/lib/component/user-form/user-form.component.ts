import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { UserFormBase } from '../../base';
import { UserFormService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserFormService],
    selector: 'zs-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.less'],
})
export class UserFormComponent extends UserFormBase implements OnDestroy, OnInit {
    public constructor(private componentService: UserFormService) {
        super();

        this.dynamicInputs$$ = new ReplaySubject();
    }

    public ngOnDestroy(): void {
        this.componentService.ngOnDestroy();

        super.ngOnDestroy();
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
