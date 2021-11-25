import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ClubFormBase } from '../base';
import { ClubFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClubFormService],
    selector: 'zs-club-form',
    templateUrl: './club-form.component.html',
    styleUrls: ['./club-form.component.less'],
})
export class ClubFormComponent extends ClubFormBase implements OnInit {
    public constructor(private componentService: ClubFormService) {
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
