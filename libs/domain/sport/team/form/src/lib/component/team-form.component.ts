import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TeamFormBase } from '../base';
import { TeamFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TeamFormService],
    selector: 'zs-team-form',
    templateUrl: './team-form.component.html',
    styleUrls: ['./team-form.component.less'],
})
export class TeamFormComponent extends TeamFormBase implements OnInit {
    public constructor(private componentService: TeamFormService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                    this.dynamicInputs$$ = this.componentService.dynamicInputs$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
